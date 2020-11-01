import React, { useState, useEffect } from 'react';
import './styles.css';

export default function WatchVariables(props) {
  const { watchVariables } = props.store.state;

  return (
    <div className="watch-variables-container">
      <div className="watch-variables-list">
        {watchVariables &&
          watchVariables.map((variable) => (
            <div key={variable} className="variable-container">
              <span className="variable">{variable}</span>
              <span
                onClick={() => props.store.deleteWatchVariable(variable)}
                className="material-icons delete-variable">
                delete
              </span>
            </div>
          ))}
      </div>
      <div className="watch-variable-input-container">
        <input
          placeholder="Add variable"
          className="watch-variable-input"
          type="text"
          id="watch-variable-input"
        />
        <span onClick={props.store.addVariable} className="material-icons add-variable">
          add
        </span>
      </div>
    </div>
  );
}
