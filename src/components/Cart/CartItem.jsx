import React from 'react';
import * as PropTypes from 'prop-types';
import classes from './CartItem.module.css';

function CartItem(props) {
  const {
    item: {
      title, quantity, total, price,
    },
  } = props;

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          $
          {total.toFixed(2)}
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
          <button type="button">-</button>
          <button type="button">+</button>
        </div>
      </div>
    </li>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
