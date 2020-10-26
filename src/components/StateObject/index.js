import React, { useState, useCallback, useMemo } from 'react';
import './styles.css';

const StateObject = (props) => {
  const { name, type, element, isSubdependency } = props;
  const [expanded, setExpanded] = useState(false);

  const onPressExpand = useCallback(() => {
    setExpanded((value) => !value);
  }, []);

  const checkDependencyType = useCallback((item) => {
    const isArray = Array.isArray(item);
    if (isArray) return 'array';
    else {
      if (type === 'loop') return 'loop';
    }
    return 'object';
  }, []);

  const dependencyType = useMemo(() => checkDependencyType(element), [element]);

  const renderSubdependency = useCallback(
    (subdependency, index) => {
      const [key, value] = subdependency;
      const subdependencyType = checkDependencyType(value);
      if (subdependencyType === 'array') {
        return <StateObject name={key} type="array" element={value} isSubdependency />;
      }
      return (
        <div
          className={`state-subdependency-${dependencyType}-container`}
          style={{
            content: '1',
            marginLeft: isSubdependency && 24,
            marginTop: isSubdependency && 4,
          }}>
          <span className="state-subdependency-text">{key}</span>
          <span className="state-subdependency-text">{value}</span>
          <input
            placeholder="New value"
            className="state-subdependency-input"
            type="text"
            id={`input-${name}-${key}`}
          />
        </div>
      );
    },
    [name],
  );

  return (
    // El objeto esta seleccionado
    <div key={name}>
      <div className="state-object-container button" onClick={onPressExpand}>
        <div
          className="state-object-left"
          style={
            isSubdependency && {
              content: '1',
            }
          }>
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
