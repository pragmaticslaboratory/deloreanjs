import React, { useState } from 'react';
import Tab from '../Tab';
import './styles.css';

const EditorBar = (props) => {
  const { tabs, isRunning } = props.appStore.state;
  const [isCreatingTab, setIsCreatingTab] = useState(false);

  const removeTab = (e) => {
    const tabName = e.currentTarget.parentNode.firstChild.getAttribute('tab-name');
    const newTabs = tabs.filter((tab) => {
      return tab.name != tabName;
    });

    props.appStore.updateTabs(newTabs);
  };

  const selectTab = (element) => {
    if (isRunning) {
      alert('Sorry, you need stop this execution before change the code! :)');
      return;
    }

    const tabName = element.getAttribute('tab-name');
    const newSelectedTab = props.appStore.state.tabs.find((tab) => {
      return tab.name === tabName;
    });

    props.appStore.selectTab(element);
    props.appStore.updateCode(newSelectedTab.input);
    props.appStore.clean(newSelectedTab.watchVariables);
  };

  const toggleIsCreatingTab = () => {
    setIsCreatingTab(!isCreatingTab);
  };

  const addTab = async (e) => {
    if (e.key === 'Enter') {
      const newTabs = [
        ...tabs,
        {
          name: e.target.value,
          input: '',
          watchVariables: [],
        },
      ];

      await props.appStore.updateTabs(newTabs, () => {
        const newTabElement = [...document.getElementsByClassName('tab-container')].pop()
          .firstChild;
        selectTab(newTabElement);
      });
      toggleIsCreatingTab();
    }
  };

  const prepareNewTab = (e) => {
    toggleIsCreatingTab();
    props.appStore.selectTab(e.currentTarget);
    props.appStore.updateCode('');
    props.appStore.clean();
  };

  return (
    <div className="editor-bar-container">
      <div className="editor-bar-tabs-container">
        {tabs.map((tab) => {
          return (
            <Tab
              key={tab.name}
              code={props.appStore.state.code}
              tab={tab}
              removeTab={removeTab}
              selectTab={selectTab}
            />
          );
        })}
      </div>
      {Boolean(isCreatingTab) && (
        <Tab
          isCreatingTab={isCreatingTab}
          removeTab={toggleIsCreatingTab}
          selectTab={selectTab}
          addTab={addTab}
        />
      )}
      <div className="editor-bar-add-container">
        <span onClick={prepareNewTab} className="material-icons">
          add
        </span>
      </div>
    </div>
  );
};

export default EditorBar;
