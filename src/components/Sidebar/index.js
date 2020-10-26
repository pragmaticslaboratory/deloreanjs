import React, { useCallback } from 'react';
<<<<<<< HEAD
import { State, SegmentedControl, SidebarSection, WatchVariables } from '../';
=======
import { StateContainer, SegmentedControl, SidebarSection, WatchVariables } from '../';

>>>>>>> a7c3e5ae2df7ec9a0f41f5d7197065fa1fa0ab1d
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
          <StateContainer appStore={appStore} />
        </SidebarSection>
      </SimpleBar>
    </div>
  );
}
