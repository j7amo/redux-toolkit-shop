import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

function Cart() {
  const items = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {' '}
        {items.map(({
          id, title, price, description, quantity,
        }) => (
          <CartItem
            key={id}
            item={{
              id,
              title,
              price,
              description,
              quantity,
            }}
          />
        ))}
      </ul>
    </Card>
  );
}

export default Cart;
