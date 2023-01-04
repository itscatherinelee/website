import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './Navigation';
import SideBar from './SideBar';

const MainLayout = (props) => (
    <div id="wrapper">
      <Navigation />
      <div id="main">
        {props.children}
      </div>
      {props.fullPage ? null : <SideBar />}
    </div>
);

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

MainLayout.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description:"Catherine Lee's personal website",
};

export default MainLayout;