import React from 'react';
import Tab from './Tab';
import playButton from '../../assets/img/play-button.png';
import pauseButton from '../../assets/img/pause.png';

import './styles.css';

const EditorBar = (props) => {
  const { tabs, isRunning } = props.appStore.state;
  const { selectTab, executeCode, stopExecution } = props;

  return (
    <div className="editor-bar-container">
      <div className="tabs-container">
        {tabs.map((tab) => {
          return (
            <Tab
              key={tab.name}
              name={tab.name}
              input={tab.input}
              appStore={props.appStore}
              selectTab={selectTab}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EditorBar;
