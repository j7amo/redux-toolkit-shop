import React from 'react';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const isShown = useSelector((state) => state.ui.isShown);

  return (
    <Layout>
      {isShown && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
