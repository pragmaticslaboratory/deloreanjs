import React from 'react';
import './Timepoint.css';

export default function Timepoint(props) {
  const { store, snapshot, enable, marginLeft } = props;
  const { selectCurrentTimepoint, state } = store;
  const { selectedTimePoint } = state;
  const { timePointId, timePointTimestamp, timePointLoc } = snapshot;
  let margin = marginLeft + 1.5;
  let isSelectedTimepoint = Boolean(selectedTimePoint == timePointId);

  const selectTimepoint = () => {
    if (enable) return selectCurrentTimepoint(snapshot);

    alert('timepoint disable');
  };

  return (
    <div className="timepoint-container">
      <div
        onClick={selectTimepoint}
        className={`timepoint ${!enable && 'disable-timepoint'} ${
          isSelectedTimepoint && enable && 'selected-timepoint'
        }`}
        style={{ marginLeft: margin + 'em', marginRight: '1.5em' }}>
        <span className="material-icons ">room</span>
      </div>
      <div className="timepoint-details-container">
        <h3 className="timepoint-title">{timePointId}</h3>
        <p className="timepoint-loc">Line: {timePointLoc}</p>
        <div className="timepoint-footer">
          <p className="timepoint-enable">{enable ? 'Enable' : 'Disable'}</p>
          <p className="timepoint-timestamp">{timePointTimestamp} ms</p>
        </div>
      </div>
    </div>
  );
}
