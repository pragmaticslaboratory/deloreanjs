import React, { useEffect, useCallback } from 'react';

import Timepoints from '../Timepoints';
import './styles.css';

export default function Timeline(props) {
  const { appStore } = props;
  const { snapshots, selectedTimePoint } = appStore.state;

  useEffect(() => {
    console.log(snapshots);
  }, [snapshots]);

  const renderTimepoint = useCallback((snapshot) => {
    return (
      <>
        <div>
          <div className="timeline-timepoint">
            <span class="material-icons">room</span>
          </div>
          <div className="timeline-details-container">
            <span class="timeline-detail-title">{snapshot.timePointId}</span>
          </div>
        </div>
        <div className="timeline-line" />
      </>
    );
  }, []);

  return (
    <>
      <Timepoints appStore={appStore} />
      <div className="timeline-timeline-container">
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
    </>
  );
}
