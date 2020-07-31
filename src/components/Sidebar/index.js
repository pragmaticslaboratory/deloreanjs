import React, { useCallback } from 'react';

import { State, SegmentedControl, SidebarSection } from '..';

import { copyOptions, runtimeOptions } from './constants';
import './styles.css';

export default function Sidebar(props) {
  const { appStore } = props;

  const toggleCopyMode = useCallback((value) => {
    appStore.toggleCopy(value);
  }, []);

  const toggleRuntimeMode = useCallback((value) => {
    appStore.toggleImplicit(value);
  }, []);

  return (
    <div className="sidebar-container">
      <SidebarSection icon="visibility" title="Settings">
        <SegmentedControl
          onChange={toggleCopyMode}
          options={copyOptions}
          value={appStore.state.copyStyle}
          title="Copy mode"
        />
        <SegmentedControl
          onChange={toggleRuntimeMode}
          options={runtimeOptions}
          value={appStore.state.implicitTimepoints}
          title="Runtime mode"
        />
      </SidebarSection>
      <SidebarSection icon="settings" title="Watch variables"></SidebarSection>
      <SidebarSection icon="build" title="State">
        <State appStore={appStore} invokeContinuation={() => alert('HOLA')} />
      </SidebarSection>
    </div>
  );
}
