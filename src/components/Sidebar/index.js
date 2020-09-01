import React, { useCallback } from 'react';

import { State, SegmentedControl, SidebarSection, Watch } from '..';

import { copyOptions, runtimeOptions } from './constants';

import expandButton from '../../assets/img/expand-button.png';
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
      <SidebarSection icon="settings" title="Watch variables">
        <div
          className="toggle-watch-variables"
          onClick={(ev) => props.appStore.toggleWatchVariables(ev)}>
          <p>Watch Variables</p>
          <img style={{ marginLeft: '8px' }} alt="expand icon" src={expandButton} height="10" />
          {appStore.state.watchVariablesComboBox && <Watch appStore={appStore} />}
        </div>
      </SidebarSection>
      <SidebarSection icon="build" title="State">
        <State appStore={appStore} invokeContinuation={() => alert('HOLA')} />
      </SidebarSection>
    </div>
  );
}
