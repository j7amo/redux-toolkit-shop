import React from 'react';
import * as PropTypes from 'prop-types';
import classes from './Notification.module.css';

function Notification(props) {
  let specialClasses = '';
  const { message, title, status } = props;

  if (status === 'error') {
    specialClasses = classes.error;
  }
  if (status === 'success') {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Notification;
