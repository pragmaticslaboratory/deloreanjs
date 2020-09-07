import React, { useState } from 'react';
import Tab from '../Tab';
import './styles.css';

const EditorBar = (props) => {
  const { tabs } = props.appStore.state;
  const [isCreatingTab, setIsCreatingTab] = useState(false);

  const toggleIsCreatingTab = () => {
    setIsCreatingTab(!isCreatingTab);
  };

  const addTab = () => {
    if (isCreatingTab) return; // a tab is currently being created
    props.appStore.newTab();
    props.appStore.updateCode('');
    props.appStore.clean();
    toggleIsCreatingTab();
  };

  const saveTabName = (e) => {
    if (e.key === 'Enter') {
      props.appStore.saveTabName(e.target.value);
      toggleIsCreatingTab();
    }
  };

  const onRemoveTab = (tabName) => {
    if (!Boolean(tabName)) toggleIsCreatingTab();
    props.appStore.removeTab(tabName);
  };

  return (
    <div className="editor-bar-container">
      <div className="editor-bar-tabs-container">
        {tabs.length > 0 &&
          tabs.map((tab) => {
            return (
              <Tab
                key={tab.name}
                tab={tab}
                removeTab={onRemoveTab}
                selectTab={props.appStore.selectTab}
                saveTabName={saveTabName}
              />
            );
          })}
      </div>
      <div className="editor-bar-add-container">
        <span onClick={addTab} className="material-icons">
          add
        </span>
      </div>
    </div>
  );
};

export default EditorBar;
