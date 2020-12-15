import React from 'react';
import './Timepoint.css';

export default function Timepoint(props) {
  const { timepoints, enable, isSelected, selectCurrentTimepoint } = props;

  return (
    <div className="timepoint-container">
      <div
        onClick={() => selectCurrentTimepoint(timepoints[0])}
        className={`timepoint ${!enable && 'disable-timepoint'} ${
          isSelected && enable && 'selected-timepoint'
        }`}>
        <span className="material-icons">room</span>
      </div>

      <section className="group-timepoint-details-container">
        {timepoints.map((timepoint, index) => {
          const { timePointId, timePointLoc, timePointTimestamp } = timepoint;

          return (
            <div key={index} className="timepoint-details-container">
              <h3 className="timepoint-title">{timePointId}</h3>
              <p className="timepoint-loc">Line: {timePointLoc}</p>
              <div className="timepoint-footer">
                <p className="timepoint-enable">
                  <b>{enable ? 'Enable' : 'Disable'}</b>
                </p>
                <p className="timepoint-timestamp">{timePointTimestamp} ms</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
