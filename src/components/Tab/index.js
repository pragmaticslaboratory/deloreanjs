import React from 'react';
import jsFile from '../../assets/img/javascript.png';
import './styles.css';

const Tab = (props) => {
  const { selectTab, tab, removeTab, saveTabName } = props;

  return (
    <div className={`tab-container`} tab-name={tab.name}>
      <div
        style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
        onClick={(e) => selectTab(e.currentTarget.parentNode.getAttribute('tab-name'))}>
        <img alt="file logo" className="file-icon" src={jsFile}></img>
        {Boolean(tab.name) ? (
          <p>{tab.name}</p>
        ) : (
          <input autoFocus onKeyDown={saveTabName} className="tab-input-name" type="text" />
        )}
      </div>
      <span
        onClick={(e) => removeTab(e.currentTarget.parentNode.getAttribute('tab-name'))}
        className="material-icons tab-close">
        close
      </span>
    </div>
  );
};
//
export default Tab;
