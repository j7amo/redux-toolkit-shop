import React from 'react';
import * as PropTypes from 'prop-types';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

function ProductItem(props) {
  const { title, price, description } = props;

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
          <button type="button">Add to Cart</button>
        </div>
      </Card>
    </li>
  );
}

ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductItem;
