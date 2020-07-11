import React from 'react';
import Tab from './Tab';
import './EditorBar.css';
import playButton from '../../../public/assets/play-button.png';
import pauseButton from '../../../public/assets/pause.png';

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
      <div className="btns-editor-container">
        {!isRunning ? (
          <div className="btn-play-container" onClick={() => executeCode(props.appStore)}>
            <p>Run</p>
            <img alt="run logo" className="btn-play" src={playButton} />
          </div>
        ) : (
          <div className="btn-pause-container" onClick={() => stopExecution(props.appStore)}>
            <p>Stop</p>
            <img alt="stop logo" className="btn-pause" src={pauseButton} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EditorBar;
