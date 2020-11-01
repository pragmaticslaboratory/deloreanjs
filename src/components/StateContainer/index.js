import React, { useEffect } from 'react';
import DependencyItem from '../DependencyItem';
import './styles.css';

export default function StateContainer(props) {
  const { appStore } = props;
  const { toggleObject } = appStore;
  const {
    selectedTimePoint,
    dependencies,
    timePointValues,
    displayedObjectsDOM,
    displayedObjectsNames,
  } = appStore.state;

  useEffect(() => {
    if (global.breakpoint.id) {
      const [timepoint] = global.heap.snapshots.filter(
        ({ timePointId }) => timePointId === global.breakpoint.id,
      );
      if (global.breakpoint.activate) {
        appStore.selectCurrentTimepoint(timepoint);
      }
    }
  }, [global.breakpoint]);

  return (
    <div className="state-panel-container">
      <div className="state-container">
        {Boolean(selectedTimePoint) ? (
          <>
            <h4 className="state-subtitle">
              Current timepoint: <span>{selectedTimePoint}</span>
            </h4>
            <div className="state-values-container">
              <div className="state-values-header">
                <div>
                  <h5>Variable</h5>
                </div>
                <div>
                  <h5>Value</h5>
                </div>
                <div>
                  <h5>New value</h5>
                </div>
              </div>
              {dependencies.map((dependency) => {
                let element = timePointValues[dependency.name];
                return (
                  <DependencyItem
                    disabled={selectedTimePoint === ''}
                    key={dependency.name}
                    element={element}
                    name={dependency.name}
                    type={dependency.type}
                    timePointValues={timePointValues}
                    toggleObject={toggleObject}
                    displayedObjectsNames={displayedObjectsNames}
                    displayedObjectsDOM={displayedObjectsDOM}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <div style={{ display: 'grid', placeContent: 'center', margin: '1em' }}>
            <h4 className="state-subtitle">Select a timepoint</h4>
          </div>
        )}
      </div>
    </div>
  );
}
