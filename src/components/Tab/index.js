import React, { useState } from 'react';
import jsFile from '../../assets/img/javascript.png';
import './styles.css';

const Tab = (props) => {
  const { selectTab, tab, removeTab, saveTabName } = props;
  const [hoverSaveIcon, setHoverSaveIcon] = useState(false);

  const showRequiresSavedIcon = () => {
    return tab.code != tab.savedCode && !hoverSaveIcon ? true : false;
  };

  const toggleHoverSaveIcon = (e) => {
    setHoverSaveIcon(!hoverSaveIcon);
  };

  return (
    <div
      className={`tab-container`}
      tab-name={tab.name}
      onMouseEnter={toggleHoverSaveIcon}
      onMouseLeave={toggleHoverSaveIcon}>
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
        className="material-icons tab-close"
        style={{ display: showRequiresSavedIcon() ? 'none' : 'flex' }}>
        close
      </span>
      <span
        style={{ display: showRequiresSavedIcon() ? 'flex' : 'none' }}
        className="material-icons tab-requires-saved">
        circle
      </span>
    </div>
  );
};
//
export default Tab;
