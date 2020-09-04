import React from 'react';
import jsFile from '../../assets/img/javascript.png';
import './styles.css';

const Tab = (props) => {
  const { selectTab, tab, removeTab, isCreatingTab, addTab, code } = props;

  return isCreatingTab ? (
    <div className="tab-selected">
      <img alt="file logo" className="file-icon" src={jsFile}></img>
      <input onKeyDown={addTab} className="tab-input-name" type="text" />
      <span onClick={removeTab} className="material-icons tab-close">
        close
      </span>
    </div>
  ) : (
    <div className="tab-container">
      <div
        tab-name={tab.name}
        style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
        onClick={(e) => selectTab(e.currentTarget)}>
        <img alt="file logo" className="file-icon" src={jsFile}></img>
        <p>{tab.name}</p>
      </div>
      <span onClick={removeTab} className="material-icons tab-close">
        close
      </span>
    </div>
  );
};

export default Tab;
