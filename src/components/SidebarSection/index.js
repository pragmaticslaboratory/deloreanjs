import React, { useState, useCallback } from 'react';
import SimpleBar from 'simplebar-react';
import './styles.css';
import { red } from 'color-name';

export default function SidebarSection(props) {
  const { title, icon, section } = props;
  const [hide, setHide] = useState(false);

  const toggleHide = useCallback(() => setHide(!hide), [hide]);

  return (
    <section className={section} style={{ border: '1px solid red' }}>
      <div className="sidebar-section-container">
        <div className="flex-row flex-jc" style={{ padding: '1em 1em 0' }}>
          <div className="flex-row">
            <span className="material-icons sidebar-section-icon">{icon}</span>
            <h5 className="sidebar-section-title">{title}</h5>
          </div>
          <span
            className="material-icons sidebar-expand-button button"
            onClick={toggleHide}
            style={{ transform: hide ? 'rotate(180deg)' : 'none' }}>
            expand_less
          </span>
        </div>
        <SimpleBar style={{ maxHeight: '15em' }}>
          <div style={{ padding: '0em 1em 1em' }}>{!hide && props.children}</div>
        </SimpleBar>
      </div>
    </section>
  );
}
