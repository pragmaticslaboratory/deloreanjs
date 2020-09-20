import React from 'react';
import './Timepoint.css';

export default function Timepoint(props) {
  const { store, snapshot, enable, marginLeft } = props;
  const { selectCurrentTimepoint } = store;

  let margin = marginLeft + 1.5;

  return (
    <div
      onClick={() => selectCurrentTimepoint(snapshot)}
      className={`timepoint ${enable && 'selected-timepoint'}`}
      style={{ marginLeft: margin + 'em', marginRight: '1.5em' }}>
      <span className="material-icons">room</span>
    </div>
  );
}
