import React from 'react';
import * as PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import { addItem } from '../../store/cartSlice';
import classes from './ProductItem.module.css';

function ProductItem(props) {
  const {
    id, title, price, description,
  } = props;
  const dispatch = useDispatch();

  const productAddToCartHandler = () => {
    dispatch(
      addItem({
        id,
        title,
        price,
        description,
        quantity: 1,
      }),
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>
            $
            {price.toFixed(2)}
          </div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button type="button" onClick={productAddToCartHandler}>
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
}

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductItem;
