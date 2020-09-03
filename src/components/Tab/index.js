import React from 'react';
import jsFile from '../../assets/img/javascript.png';
import './styles.css';

const Tab = (props) => {
  return (
    <div className="tab-container" onClick={(ev) => props.selectTab(ev, props.appStore)}>
      <img alt="file logo" name={props.name} className="file-icon" src={jsFile}></img>
      <p name={props.name}>{props.name}</p>
      <span class="material-icons tab-close">close</span>
    </div>
  );
};

export default Tab;
