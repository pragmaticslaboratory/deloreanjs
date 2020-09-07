import React, { useEffect, useCallback } from 'react';

import Timepoints from '../Timepoints';
import './styles.css';

export default function Timeline(props) {
  const { appStore } = props;
  const { state, selectCurrentTimepoint } = appStore;
  const { snapshots, selectedTimePoint } = state;

  const [startTime, endTime] = [0, 20];

  const renderTimepoint = useCallback(
    (snapshot) => {
      const { timePointId } = snapshot;
      return (
        <div key={timePointId}>
          <div>
            <div
              onClick={() => selectCurrentTimepoint(snapshot)}
              className={`timeline-timepoint ${
                selectedTimePoint === timePointId && 'timeline-selected-timepoint'
              }`}>
              <span className="material-icons">room</span>
            </div>
            <div className="timeline-details-container">
              <span className="timeline-detail-title">{timePointId}</span>
            </div>
          </div>
          <div className="timeline-line" />
        </div>
      );
    },
    [selectedTimePoint],
  );

  return (
    <>
      <Timepoints appStore={appStore} />
      <div className="timeline-container">
        <div className="timeline-time-container">
          {Array.apply(null, Array(60)).map((_, index) => (
            <div className="timeline-time-item">
              <p>{index}ms</p>
            </div>
          ))}
        </div>
        <div className="timeline-timepoints-container">
          {snapshots.length ? (
            <>
              <div className="timeline-start-container">
                <span>Start</span>
              </div>
              <div className="timeline-line" />
              {snapshots.map(renderTimepoint)}
              <div className="timeline-start-container timeline-end-container">
                <span>End</span>
              </div>
            </>
          ) : (
            <span>Run the code to start tracking timepoints</span>
          )}
        </div>
      </div>
    </>
  );
}
