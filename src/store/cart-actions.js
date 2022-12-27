// this is a THUNK:
// it is basically just a function which returns another function to be called later.
// with vanilla Redux we had to install 'redux-thunk' package and then apply it to the
// Redux store with the help of applyMiddleware function to be able to use this functionality, BUT
// with Redux Toolkit we have it FROM THE START! We don't need to install it!
import { showNotification } from './uiSlice';
import { setCart } from './cartSlice';

export function sendCartData(cartData) {
  // we are using 'async' keyword here just because we wanna use 'await' keyword.
  // the returned function automatically receives 'dispatch' function for
  // dispatching plain action objects
  return async (dispatch) => {
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
        { method: 'PUT', body: JSON.stringify(cartData) },
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
}

export function fetchCartData() {
  return async (dispatch) => {
    dispatch(
      showNotification({
        message: 'Fetching cart data...',
        status: 'pending',
        title: 'Fetching...',
      }),
    );

    try {
      const response = await fetch(
        'https://react-movies-b2487-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        { method: 'GET' },
      );

      if (!response.ok) {
        throw new Error('Something went wrong...');
      }

      const data = await response.json();
      dispatch(setCart(data));

      dispatch(
        showNotification({
          message: 'Cart data successfully fetched!',
          status: 'success',
          title: 'Success!',
        }),
      );
    } catch (err) {
      dispatch(
        showNotification({
          message: 'Something went wrong while fetching cart data...',
          status: 'error',
          title: 'Error',
        }),
      );
    }
  };
}

// The 'moving async logic OUT of component's useEffect TO thunk' approach
// is better because we can keep the component concise and use more declarative
// way of expressing what we want. It doesn't necessarily mean that putting async logic inside
// component's useEffect is 'bad' but still...
