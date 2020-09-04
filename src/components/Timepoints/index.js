import React from 'react';
import timepointIcon from '../../assets/img/time.png';

import './styles.css';

const Timepoints = (props) => {
  const { selectTimePoint } = props.appStore;
  const { snapshots, selectedTimePoint } = props.appStore.state;

  return (
    <div className="timepoints-panel">
      <h5 className="timepoints-header">Timepoints</h5>
      {snapshots.map((snapshot) => {
        return (
          <div
            className="timepoint-button"
            onClick={selectTimePoint}
            kont={snapshot.timePointId}
            id={snapshot.timePointId}
            key={snapshot.timePointId}>
            <span className="material-icons timepoint-icon">place</span>
            <span className="timepoint-name">{snapshot.timePointId}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Timepoints;
