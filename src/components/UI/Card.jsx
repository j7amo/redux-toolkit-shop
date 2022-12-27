import React from 'react';
import * as PropTypes from 'prop-types';
import classes from './Card.module.css';

function Card(props) {
  const { className, children } = props;

  return (
    <section className={`${classes.card} ${className || ''}`}>
      {children}
    </section>
  );
}

Card.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Card;
