import React from 'react';
import './Timestamps.css';

export default function Timestamps(props) {
  const { endTime } = props;

  return (
    <div className="time-container">
      {Array.apply(null, Array(endTime)).map((_, index) => (
        <div key={index} className="time-item">
          <p>{index}ms</p>
        </div>
      ))}
    </div>
  );
}
