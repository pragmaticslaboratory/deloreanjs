import React from 'react';
import './styles.css';

const Timepoints = (props) => {
  const { selectCurrentTimepoint } = props.appStore;
  const { snapshots, selectedTimePoint } = props.appStore.state;

  return (
    <div className="timepoints-panel">
      <h5 className="timepoints-header">Timepoints</h5>
      <div className="timepoints-buttons">
        {snapshots.map((snapshot) => {
          const { timePointId } = snapshot;
          return (
            <div
              className={`timepoint-button ${
                selectedTimePoint === timePointId && 'timepoint-button-selected'
              }`}
              onClick={() => selectCurrentTimepoint(snapshot)}
              kont={snapshot.timePointId}
              id={snapshot.timePointId}
              key={snapshot.timePointId}>
              <span className="material-icons timepoint-icon">place</span>
              <span className="timepoint-name">{snapshot.timePointId}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timepoints;
