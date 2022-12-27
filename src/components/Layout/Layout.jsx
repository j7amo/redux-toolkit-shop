import React from 'react';
import * as PropTypes from 'prop-types';
import MainHeader from './MainHeader';

function Layout(props) {
  const { children } = props;

  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
