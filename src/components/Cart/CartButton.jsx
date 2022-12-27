import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';

import { toggle } from '../../store/uiSlice';

function CartButton() {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const clickHandler = () => {
    dispatch(toggle());
  };

  return (
    <button className={classes.button} type="button" onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
}

export default CartButton;
