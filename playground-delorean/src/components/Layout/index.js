import React, { useState } from 'react';
import './styles.css';

const Layout = (props) => {
  return <div className="layout-container">{props.children}</div>;
};

export default Layout;
