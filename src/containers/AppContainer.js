import React, { createRef } from 'react';
import { Container } from 'unstated';
import { DependencyItem } from '../components';
import { test1, test2, test3, test4, test5, test6 } from '../assets/example-inputs/index';

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import '../dracula.css';

const files = [
  {
    name: 'test1.js',
    savedCode: test1,
    code: test1,
    watchVariables: ['courseName'],
    selected: false,
    ref: createRef(),
  },
  {
    name: 'test2.js',
    savedCode: test2,
    code: test2,
    watchVariables: ['sum'],
    selected: false,
  },
  {
    name: 'test3.js',
    savedCode: test3,
    code: test3,
    watchVariables: ['courseNames'],
    selected: false,
  },
  {
    name: 'test4.js',
    savedCode: test4,
    code: test4,
    watchVariables: ['realMean'],
    selected: false,
  },
  {
    name: 'test5.js',
    savedCode: test5,
    code: test5,
    watchVariables: ['universityMean', 'realMean'],
    selected: false,
    ref: createRef(),
  },
  {
    name: 'test6.js',
    savedCode: test6,
    code: test6,
    watchVariables: ['average'],
    selected: false,
    ref: createRef(),
  },
];
export default class AppContainer extends Container {
  constructor(props = {}) {
    super();
    this.state = {
      dependencies: [],
      tabs: files,
      code: '',
      watchVariables: [],
      snapshots: [],
      isRunning: false,
      readOnly: false,
      selectedTimePoint: '',
      selectedTimePointLine: '',
      timePointValues: {},
      displayedObjects: [],
      displayedObjectsNames: [],
      displayedObjectsDOM: [],
      copyStyle: 'Shallow Copy',
      implicitTimepoints: 'Normal',
    };
  }

  getTimepointById = (name) => {
    return this.state.snapshots.find((timepoint) => timepoint.timePointId == name);
  };

  saveCode = () => {
    const [selectedTab] = this.getSelectedTab();
    const tabs = this.state.tabs.map((tab) => {
      if (tab == selectedTab) tab.savedCode = tab.code;
      return tab;
    });
    this.setState({
      tabs,
    });
  };

  getSelectedTab = () => {
    return this.state.tabs.filter((tab) => tab.selected === true);
  };

  getEditor = (code, ref) => {
    var options = {
      theme: 'dracula',
      tabSize: 4,
      keyMap: 'sublime',
      mode: 'js',
      lineNumbers: true,
    };

    return <CodeMirror onChanges={this.updateTabCode} ref={ref} value={code} options={options} />;
  };

  updateTabCode = (instance, changes) => {
    const [tabSelected] = this.getSelectedTab();
    this.setState((prevState) => {
      return prevState.tabs.map((tab) => {
        if (tab == tabSelected) tab.code = instance.getValue();
        return tab;
      });
    });
  };

  getSelectedEditor = () => {
    const { tabs } = this.state;
    const selectedTab = tabs.find((tab) => tab.selected === true);
    if (selectedTab) return this.getEditor(selectedTab.code, selectedTab.ref);
    return this.setDefaultTab();
  };

  setDefaultTab = () => {
    const { tabs } = this.state;
    if (tabs.length === 0)
      return (
        <div style={{ display: 'grid', placeContent: 'center', height: '100%' }}>
          <span>Create a file</span>
        </div>
      );
    this.selectTab(tabs[0].name);
  };

  selectTab = (name) => {
    if (this.isRunning) {
      alert('Sorry, you need stop this execution before change the code! :)');
      return;
    }

    const { tabs } = this.state;
    let oldSelectedTabIndex,
      newSelectedTabIndex = -1;
    tabs.forEach((tab, index) => {
      if (tab.selected === true) oldSelectedTabIndex = index;
      if (tab.name === name) newSelectedTabIndex = index;
    });

    // selected tab was selected
    if (oldSelectedTabIndex === newSelectedTabIndex) return;
    // prepare delorean core and delorean ui
    this.clean(tabs[newSelectedTabIndex].watchVariables);
    // no tab selected
    if (oldSelectedTabIndex === -1) {
      this.setState((prevState) => {
        return prevState.tabs.map((tab, index) => {
          if (index === newSelectedTabIndex) tab.selected = true;
          return tab;
        });
      });
      this.stilizeSelectedTab(newSelectedTabIndex);
      return;
    }

    // console.log(tabs[oldSelectedTabIndex].ref);
    // selected tab change
    this.setState((prevState) => {
      return prevState.tabs.map((tab, index) => {
        if (index === newSelectedTabIndex) tab.selected = true;
        if (index === oldSelectedTabIndex) tab.selected = false;
        return tab;
      });
    });
    this.stilizeSelectedTab(newSelectedTabIndex, oldSelectedTabIndex);
  };

  stilizeSelectedTab = (newSelectedTabIndex, oldSelectedTabIndex = -1) => {
    const tabElements = [...document.getElementsByClassName('tab-container')];
    if (!tabElements.length) return;
    if (oldSelectedTabIndex >= 0) {
      tabElements[oldSelectedTabIndex].classList.remove('tab-selected');
    }
    tabElements[newSelectedTabIndex].classList.add('tab-selected');
  };

  removeTab = (name) => {
    this.setState((prevState) => {
      let tabs = prevState.tabs.filter((tab) => tab.name != name);
      return {
        ...prevState,
        tabs,
      };
    });
  };

  newTab = async () => {
    const tab = {
      name: '',
      code: '',
      savedCode: '',
      watchVariables: [],
      selected: false,
      ref: createRef(),
    };

    let tabs = this.state.tabs;
    tabs.push(tab);

    await this.setState((prevState) => {
      return {
        ...prevState,
        tabs,
      };
    });
  };

  saveTabName = async (name) => {
    if (name.substr(-3) != '.js') name = name.concat('.js');

    await this.setState((prevState) => {
      return prevState.tabs.map((tab) => {
        if (!Boolean(tab.name)) tab.name = name;
        return tab;
      });
    });

    await this.selectTab(name);
  };

  updateTabs = (tabs, callback) => {
    this.setState(
      {
        tabs,
      },
      callback,
    );
  };

  setDefaultTab = () => {
    const { tabs } = this.state;
    if (tabs.length === 0)
      return (
        <div style={{ display: 'grid', placeContent: 'center', height: '100%' }}>
          <span>Create a file</span>
        </div>
      );
    this.selectTab(tabs[0].name);
  };

  updateTabs = (tabs, callback) => {
    this.setState(
      {
        tabs,
      },
      callback,
    );
  };

  clean = (watchVariables = []) => {
    global.heap = {
      dependencies: {},
      snapshots: [],
    };
    global.continuations = {};
    global.snapshotCounter = 0;
    this.resetWatchVariables(watchVariables);
    this.setState({
      snapshots: [],
      dependencies: [],
      timePointValues: {},
      selectedTimePoint: '',
      selectedTimePointLine: '',
      displayedObjects: [],
      displayedObjectsNames: [],
      displayedObjectsDOM: [],
    });
  };

  updateSnapshots = (snapshots) => {
    this.setState({
      snapshots,
    });
  };

  updateDependencies = (dependencies) => {
    this.setState({
      dependencies,
    });
  };

  toggleIsRunning = () => {
    this.setState({
      isRunning: !this.state.isRunning,
      readOnly: !this.state.readOnly,
    });
  };

  selectCurrentTimepoint = (timepoint) => {
    this.setState({
      selectedTimePoint: timepoint.timePointId,
      selectedTimePointLine: timepoint.timeLineId,
      timePointValues: timepoint,
    });
  };

  toggleObject = (ev, object, name) => {
    let index = this.state.displayedObjectsNames.indexOf(name);

    if (index < 0) {
      let displayedObjects = [...this.state.displayedObjects, object];
      let displayedObjectsNames = [...this.state.displayedObjectsNames, name];
      let displayedObjectsDOM = [...this.state.displayedObjectsDOM, []];

      for (let value in object) {
        let element = displayedObjects[displayedObjects.length - 1][value];

        displayedObjectsDOM[displayedObjects.length - 1].push(
          <DependencyItem
            key={name + '-' + value}
            element={element}
            name={name + '-' + value}
            type={typeof element}
            toggleObject={this.toggleObject}
            displayedObjectsNames={displayedObjectsNames}
            displayedObjectsDOM={displayedObjectsDOM}
            input={name + '-' + value}
          />,
        );
      }

      this.setState({
        displayedObjects,
        displayedObjectsNames,
        displayedObjectsDOM,
      });
    } else {
      this.state.displayedObjects.splice(index, 1);
      this.state.displayedObjectsNames.splice(index, 1);
      this.state.displayedObjectsDOM.splice(index, 1);

      let displayedObjects = this.state.displayedObjects;
      let displayedObjectsNames = this.state.displayedObjectsNames;
      let displayedObjectsDOM = this.state.displayedObjectsDOM;

      this.setState({
        displayedObjects,
        displayedObjectsNames,
        displayedObjectsDOM,
      });
    }
  };

  deleteWatchVariable = (variable) => {
    this.setState({
      watchVariables: this.state.watchVariables.filter(function (e) {
        return e !== variable;
      }),
    });

    global.dependencies = global.dependencies.filter(function (e) {
      return e.name !== variable;
    });
  };

  resetWatchVariables = (variables) => {
    this.setState({
      watchVariables: variables,
    });
    global.dependencies = variables.map((e) => ({
      name: e,
      type: 'normal',
    }));
  };

  toggleCopy = (mode) => {
    if (!this.state.isRunning) {
      if (mode === this.state.copyStyle) {
        return;
      } else {
        this.setState({
          copyStyle: mode,
        });
      }
    } else {
      alert('Sorry, you need stop this execution before change the copy mode! :)');
      return;
    }
  };

  toggleImplicit = (mode) => {
    if (!this.state.isRunning) {
      if (mode === this.state.implicitTimepoints) {
        return;
      } else {
        this.setState({
          implicitTimepoints: mode,
        });
        global.implicitTimepoints = !global.implicitTimepoints;
      }
    } else {
      alert('Sorry, you need stop this execution before change the copy mode! :)');
      return;
    }
  };

  addVariable = (ev) => {
    const newWatchVariable = document.getElementById('watch-variable-input');

    if (newWatchVariable.value && !this.state.watchVariables.includes(newWatchVariable.value)) {
      this.setState({
        watchVariables: [...this.state.watchVariables, newWatchVariable.value],
      });
      global.dependencies.push({ name: newWatchVariable.value, type: 'normal' });
      newWatchVariable.value = '';
    }
  };
}
