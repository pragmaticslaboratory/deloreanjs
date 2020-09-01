import React from 'react';
import StateObject from '../StateObject';

import './styles.css';

const DependencyItem = (props) => {
  const {
    element,
    name,
    disabled,
    type,
    toggleObject,
    displayedObjectsNames,
    displayedObjectsDOM,
  } = props;

  const display = typeof element == 'function' ? 'none' : 'visible';

  if (typeof element == 'object') {
    return (
      <StateObject
        element={element}
        name={name}
        type={type}
        toggleObject={toggleObject}
        displayedObjectsNames={displayedObjectsNames}
        displayedObjectsDOM={displayedObjectsDOM}
      />
    );
  } else {
    return (
      <div style={{ display: display }} key={name}>
        <div className="dependency-item-container">
          <div className="dependency-item-column">
            <span className="state-value-name">{type !== 'loop' ? name : name + ' (loop)'}</span>
          </div>
          {!disabled && (
            <>
              <div className="dependency-item-column">
                <p className="dependency-item-value ">
                  {typeof element == 'number' || element ? element.toString() : 'undefined'}
                </p>
              </div>
              <div className="dependency-item-column">
                <input
                  placeholder="New value"
                  className="dependency-item-input"
                  type="text"
                  id={`input-${name}`}
                />
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
};

export default DependencyItem;
