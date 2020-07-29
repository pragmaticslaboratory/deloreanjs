import React from 'react';
import WatchVariables from '../Watch';
import timepointIcon from '../../assets/img/time.png';
import expandButton from '../../assets/img/expand-button.png';

import P5Wrapper from 'react-p5-wrapper';
import sketch from '../../p5/main';

import './styles.css';

const Timepoints = (props) => {
  const { selectTimePoint } = props.appStore;
  const { snapshots, selectedTimePoint } = props.appStore.state;

  return (
    <div className="timepoints-panel">
      <div className="timeponts-bar-container">
        <p>Timepoints</p>

        <div
          className="toggle-watch-variables"
          onClick={(ev) => props.appStore.toggleWatchVariables(ev)}>
          <p>Watch Variables</p>
          <img style={{ marginLeft: '8px' }} alt="expand icon" src={expandButton} height="10" />
        </div>
      </div>

      <div className="timepoints-container">
        <div className="timepoints-btns">
          {snapshots.map((snapshot) => {
            return (
              <div
                className="timepoint-button"
                onClick={selectTimePoint}
                kont={snapshot.timePointId}
                id={snapshot.timePointId}
                key={snapshot.timePointId}>
                <img alt="timepoint logo" className="icon-timepoint" src={timepointIcon}></img>
                {snapshot.timePointId}
              </div>
            );
          })}
        </div>

        <div className="p5-container">
          {props.appStore.state.watchVariablesComboBox && (
            <WatchVariables appStore={props.appStore} />
          )}
          <P5Wrapper sketch={sketch} selectedTimePoint={selectedTimePoint} snapshots={snapshots} />
        </div>
      </div>
    </div>
  );
};

export default Timepoints;
