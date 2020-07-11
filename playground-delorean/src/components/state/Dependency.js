import React from 'react';
import WatchedObject from './Object';
import { TextField } from '@material-ui/core';

const Dependency = (props) => {
  const { element, name, type, toggleObject, displayedObjectsNames, displayedObjectsDOM } = props;

  // console.log(name,element)
  if (typeof element == 'function') {
    // La dependencia es una funcion
    return (
      <div style={{ display: 'none' }} key={name} className="state-values">
        <p>{type !== 'loop' ? name : name + ' (loop)'}</p>
        <p>{typeof element == 'number' || element ? element.toString() : 'undefined'}</p>
        <TextField id={`input-${name}`} />
      </div>
    );
  } else {
    return typeof element == 'object' ? (
      // La dependencia es un objeto
      <WatchedObject
        element={element}
        name={name}
        type={type}
        toggleObject={toggleObject}
        displayedObjectsNames={displayedObjectsNames}
        displayedObjectsDOM={displayedObjectsDOM}
      />
    ) : (
      // La dependencia no es un objeto
      <div key={name} className="state-values">
        <p>{type !== 'loop' ? name : name + ' (loop)'}</p>
        <p>{typeof element == 'number' || element ? element.toString() : 'undefined'}</p>
        <TextField id={`input-${name}`} />
      </div>
    );
  }
};

export default Dependency;
