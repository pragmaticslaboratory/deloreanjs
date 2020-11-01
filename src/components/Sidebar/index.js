import React, { useCallback } from 'react';
import { StateContainer, SegmentedControl, SidebarSection, WatchVariables } from '../';
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
      <SidebarSection icon="settings" title="Settings" section="settings-section">
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

      <SidebarSection icon="visibility" title="Watch variables" section="variables-section">
        <WatchVariables store={appStore} />
      </SidebarSection>

      <SidebarSection icon="build" title="State" section="state-section">
        <StateContainer appStore={appStore} />
      </SidebarSection>
    </div>
  );
}
