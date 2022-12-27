import React from 'react';
import classes from './CartButton.module.css';

function CartButton() {
  return (
    <button className={classes.button} type="button">
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
}

export default CartButton;
