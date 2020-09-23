import React, { useState, useCallback, useMemo } from 'react';
import './styles.css';

const StateObject = (props) => {
  const { name, type, element, toggleObject, displayedObjectsDOM, displayedObjectsNames } = props;
  const [expanded, setExpanded] = useState(false);

  const onPressExpand = useCallback(() => {
    setExpanded((value) => !value);
  }, []);

  const dependencyType = useMemo(() => {
    const isArray = Array.isArray(element);
    if (isArray) return 'array';
    else {
      if (type === 'loop') return 'loop';
    }
    return 'object';
  }, [element]);

  const renderSubdependency = useCallback((subdependency, index) => {
    const [key, value] = subdependency;
    return (
      <div className={`state-subdependency-${dependencyType}-container`} style={{ content: '1' }}>
        <span className="state-subdependency-text">{key}</span>
      </div>
    );
  }, []);

  return (
    // El objeto esta seleccionado
    <div key={name}>
      <div className="state-object-container button" onClick={onPressExpand}>
        <div className="state-object-left">
          <p>{name}</p> <p className="state-object-type">[{dependencyType}]</p>
        </div>
        <span
          className="material-icons button state-object-expand-icon"
          style={{ transform: expanded ? 'rotate(180deg)' : 'none' }}>
          expand_more
        </span>
      </div>
      {expanded && <div>{Object.entries(element).map(renderSubdependency)}</div>}
      <div className="state-object-divider" />
    </div>
  );
};

export default StateObject;
