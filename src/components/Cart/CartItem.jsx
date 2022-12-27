import React from 'react';
import * as PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from '../../store/cartSlice';

function CartItem(props) {
  const {
    item: {
      id, title, price, description, quantity,
    },
  } = props;
  const dispatch = useDispatch();

  const quantityIncreaseHandler = () => {
    dispatch(increaseItemQuantity(id));
  };

  const quantityDecreaseHandler = () => {
    dispatch(decreaseItemQuantity(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className={classes.price}>
          $
          {(price * quantity).toFixed(2)}
          {' '}
          <span className={classes.itemprice}>
            ($
            {price.toFixed(2)}
            /item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x
          {' '}
          <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={quantityDecreaseHandler}>
            -
          </button>
          <button type="button" onClick={quantityIncreaseHandler}>
            +
          </button>
        </div>
      </div>
    </li>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
