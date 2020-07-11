import React from 'react';

import './styles.css';

export default function SidebarSection(props) {
  const { title, icon } = props;
  return (
    <div className="sidebar-section-container">
      <h5 className="sidebar-section-title">
        <span class="material-icons sidebar-section-icon">{icon}</span>
        {title}
      </h5>
      {props.children}
    </div>
  );
}
