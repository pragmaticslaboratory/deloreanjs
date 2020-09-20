import React, { useCallback } from 'react';
import { State, SegmentedControl, SidebarSection, WatchVariables } from '../';

import { copyOptions, runtimeOptions } from './constants';
import './styles.css';
import SimpleBar from 'simplebar-react';

export default function Sidebar(props) {
  const { appStore } = props;
  const maxHeight = '20em';

  const toggleCopyMode = useCallback((value) => {
    appStore.toggleCopy(value);
  }, []);

  const toggleRuntimeMode = useCallback((value) => {
    appStore.toggleImplicit(value);
  }, []);

  return (
    <div className="sidebar-container">
      <SimpleBar style={{ maxHeight: maxHeight }}>
        <SidebarSection icon="settings" title="Settings">
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
      </SimpleBar>
      <SimpleBar style={{ maxHeight: maxHeight }}>
        <SidebarSection icon="visibility" title="Watch variables">
          <WatchVariables store={appStore} />
        </SidebarSection>
      </SimpleBar>

      <SimpleBar style={{ maxHeight: maxHeight }}>
        <SidebarSection icon="build" title="State">
          <State appStore={appStore} />
        </SidebarSection>
      </SimpleBar>
    </div>
  );
}
