import React from 'react';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'id1',
    title: 'Test 1',
    description: 'Test 1 description',
    price: 11,
  },
  {
    id: 'id2',
    title: 'Test 2',
    description: 'Test 2 description',
    price: 22,
  },
  {
    id: 'id3',
    title: 'Test 3',
    description: 'Test 3 description',
    price: 33,
  },
];

function Products() {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {' '}
        {DUMMY_PRODUCTS.map(({
          id, title, description, price,
        }) => (
          <ProductItem
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
          />
        ))}
      </ul>
    </section>
  );
}

export default Products;
