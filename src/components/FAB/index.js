import React from 'react';
import './styles.css';

export default function FAB(props) {
  const { appStore, invokeContinuation, executeCode, stopExecution } = props;
  const { isRunning } = appStore.state;

  return (
    <div className="fab-content-container">
      {isRunning ? (
        <>
          <div className="fab-container fab-smaller" onClick={() => stopExecution(appStore)}>
            <span className="material-icons fab-icon">stop</span>
          </div>
          <div className="fab-container" onClick={() => invokeContinuation(appStore)}>
            <span className="material-icons fab-icon">fast_forward</span>
          </div>
        </>
      ) : (
        <div className="fab-container" onClick={() => executeCode(appStore)}>
          <span className="material-icons fab-icon">play_arrow</span>
        </div>
      )}
    </div>
  );
}
