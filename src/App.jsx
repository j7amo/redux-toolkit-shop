import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { showNotification } from './store/uiSlice';
import Notification from './components/UI/Notification';

function App() {
  // this ref is used for deciding if it is the first render or not.
  // we need it to avoid this situation:
  // when application starts the cart is empty, and inside useEffect we send
  // fetch request right after the first render, and as a result we overwrite data
  // in the Firebase with the empty one.
  // So with the help of this ref we can skip the body of useEffect for the first time.
  const firstTimeRender = useRef(true);
  const dispatch = useDispatch();
  const isShown = useSelector((state) => state.ui.isShown);
  // let's try a naive approach (in the next commit we will use THUNKS instead of this)
  // for doing asynchronous work (we are trying to send
  // cart contents to Firebase on every cart change which can be adding/removing item)
  // WITHOUT any async Redux at all:
  // 1) When somewhere in the app we dispatch a synchronous action 'addItem'/'removeItem'
  // our Redux store reducer updates the state. So if we subscribe to these updates in some
  // React component (e.g. in current component) then we can listen to them and react!
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  // const { message = '', title = '', status = '' } = notification;

  // 2) To react to cart change we can use useEffect hook with a 'cart' as a dependency.
  // Because App component will re-evaluate everytime cart changes (this is how useSelector works)
  // the useEffect hook will also be called everytime (because 'cart' IS a dependency)!
  useEffect(() => {
    // here's this little trick with ref (to avoid Firebase data overwrite):
    if (!firstTimeRender.current) {
      // 3) And finally we just send the latest data to the Firebase:
      const sendCartData = async () => {
        dispatch(
          showNotification({
            message: 'Sending cart data...',
            status: 'pending',
            title: 'Sending...',
          }),
        );
        try {
          const response = await fetch(
            'https://react-movies-b2487-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
            { method: 'PUT', body: JSON.stringify(cart) },
          );

          if (!response.ok) {
            throw new Error('Something went wrong...');
          }

          dispatch(
            showNotification({
              message: 'Cart data successfully sent!',
              status: 'success',
              title: 'Success!',
            }),
          );
        } catch (err) {
          dispatch(
            showNotification({
              message: 'Something went wrong while sending cart data...',
              status: 'error',
              title: 'Error',
            }),
          );
        }
      };

      sendCartData();
    } else {
      firstTimeRender.current = false;
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          message={notification.message}
          title={notification.title}
          status={notification.status}
        />
      )}
      <Layout>
        {isShown && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
