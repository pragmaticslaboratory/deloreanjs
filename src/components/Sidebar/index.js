import React from 'react';

import SidebarSection from '../SidebarSection';
import SegmentedControl from '../SegmentedControl';

import { copyOptions, runtimeOptions } from './constants';
import './styles.css';

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <SidebarSection icon="visibility" title="Settings">
        <SegmentedControl options={copyOptions} title="Copy mode" />
        <SegmentedControl options={runtimeOptions} title="Runtime mode" />
      </SidebarSection>
      <SidebarSection icon="settings" title="Watch variables"></SidebarSection>
    </div>
  );
}
