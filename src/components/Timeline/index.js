import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Timepoints from '../Timepoints';
import './styles.css';

export default function Timeline(props) {
  const { appStore, getEndTimes } = props;
  const { state, selectCurrentTimepoint } = appStore;
  const { snapshots, selectedTimePoint } = state;
  const [endTime, setEndTime] = useState(0);

  useEffect(() => {
    if (snapshots.length) {
      const endTime = getEndTimes();
      console.log(endTime - timestamps[timestamps.length - 1]);
      setEndTime(endTime);
    }
  }, [snapshots]);

  const [timestamps, timestampsSnapshots] = useMemo(() => {
    const result = {};
    snapshots.forEach((snapshot) => {
      const timestampArray = result[snapshot.timePointTimestamp];
      if (!timestampArray) {
        result[snapshot.timePointTimestamp] = [snapshot];
      } else {
        result[snapshot.timePointTimestamp].push(snapshot);
      }
    });
    return [Object.keys(result), Object.values(result)];
  }, [snapshots]);

  const renderTimepoint = useCallback(
    (timestamp, index) => {
      let positionX = 79 * timestamp;
      if (index > 0) {
        const difference = timestamp - timestamps[index - 1];
        positionX = 57 * difference;
        if (difference > 1) {
          positionX += 24 * (difference - 1);
        }
      }
      const timePointId = 'test';
      return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }} key={index}>
          <div
            onClick={() => selectCurrentTimepoint(snapshot)}
            className={`timeline-timepoint ${
              selectedTimePoint === timePointId && 'timeline-selected-timepoint'
            }`}
            style={{ marginLeft: positionX }}>
            <span className="material-icons">room</span>
          </div>
        </div>
      );
    },
    [selectedTimePoint, timestamps],
  );

  return (
    <>
      <Timepoints appStore={appStore} />
      <div className="timeline-container">
        <div className="timeline-time-container">
          <h5 className="timeline-header">Timeline</h5>
          {Array.apply(null, Array(60)).map((_, index) => (
            <div key={index} className="timeline-time-item">
              <p>{index}ms</p>
            </div>
          ))}
        </div>
        <div className="timeline-timepoints-container">
          {timestamps.length ? (
            <>
              <div className="timeline-start-container">
                <span>Start</span>
              </div>
              {timestamps.map(renderTimepoint)}
              <div
                className="timeline-start-container timeline-end-container"
                style={{ marginLeft: (endTime - timestamps[timestamps.length - 1]) * 70 }}>
                <span>End</span>
              </div>
            </>
          ) : (
            <div style={{ display: 'grid', placeContent: 'center', width: '100%', height: '100%' }}>
              <span>Run the code to start tracking timepoints</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
