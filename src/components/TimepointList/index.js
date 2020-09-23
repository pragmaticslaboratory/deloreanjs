import React from 'react';
import './styles.css';
import SimpleBar from 'simplebar-react';

export default function TimepointList(props) {
  const { selectCurrentTimepoint, state } = props.store;
  const { snapshots, selectedTimePoint } = state;

  return (
    <div className="timepoint-list-container">
      <div style={{ display: 'flex', margin: '1em' }}>
        <span className="material-icons timeline-icon">timeline</span>
        <h5 className="timepoint-list-title">Timepoints</h5>
      </div>
      <SimpleBar style={{ maxHeight: '100%' }}>
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
      </SimpleBar>
    </div>
  );
}
