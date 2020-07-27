import React from 'react';
import rightArrow from '../../assets/img/right-arrow.png';
import expandButton from '../../assets/img/expand-button.png';
import './styles.css';

const StateObject = (props) => {
  const { name, type, element, toggleObject, displayedObjectsDOM, displayedObjectsNames } = props;

  return displayedObjectsNames.indexOf(name) >= 0 ? (
    // El objeto esta seleccionado
    <div key={name}>
      <div
        className="state-values-object"
        onClick={(ev) => {
          toggleObject(ev, element, name);
        }}>
        <div className="object-expand-container">
          <img style={{ marginRight: '8px' }} alt="expand icon" src={expandButton} height="10" />
          <p>{type !== 'loop' ? name : name + ' (loop)'}</p>
        </div>
        <p></p>
        <p>[Object]</p>
      </div>
      <div>{displayedObjectsDOM[displayedObjectsNames.indexOf(name)]}</div>
    </div>
  ) : (
    // El objeto no esta seleccionado
    <div
      key={name}
      className="state-values-object"
      onClick={(ev) => {
        toggleObject(ev, element, name);
      }}>
      <div className="object-expand-container">
        <img style={{ marginRight: '8px' }} alt="right icon" src={rightArrow} height="10" />
        <p>{type !== 'loop' ? name : name + ' (loop)'}</p>
      </div>
      <p></p>
      <p>[Object]</p>
    </div>
  );
};

export default StateObject;
