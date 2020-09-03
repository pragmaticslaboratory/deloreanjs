import React from 'react';
import Tab from '../Tab';

import './styles.css';

const EditorBar = (props) => {
  const { tabs } = props.appStore.state;
  const { selectTab } = props;

  return (
    <div className="editor-bar-container">
      <div className="tabs-container">
        {tabs.map((tab) => {
          return (
            <Tab
              key={tab.name}
              name={tab.name}
              input={tab.input}
              appStore={props.appStore}
              selectTab={selectTab}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EditorBar;
