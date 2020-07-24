import React, { useState, useCallback } from 'react';

import './styles.css';

export default function SidebarSection(props) {
  const { title, icon } = props;
  const [hide, setHide] = useState(false);

  const toggleHide = useCallback(() => setHide(!hide), [hide]);

  return (
    <div className="sidebar-section-container">
      <div className="flex-row flex-jc">
        <div className="flex-row">
          <span class="material-icons sidebar-section-icon">{icon}</span>
          <h5 className="sidebar-section-title">{title}</h5>
        </div>
        <span
          class="material-icons sidebar-expand-button button"
          onClick={toggleHide}
          style={{ transform: hide ? 'rotate(180deg)' : 'none' }}>
          expand_less
        </span>
      </div>
      {!hide && props.children}
    </div>
  );
}
