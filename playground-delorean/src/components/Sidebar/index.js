import React from 'react';

import './styles.css';
import SidebarSection from '../SidebarSection';

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <SidebarSection icon="visibility" title="Settings"></SidebarSection>
      <SidebarSection icon="settings" title="Watch variables"></SidebarSection>
    </div>
  );
}
