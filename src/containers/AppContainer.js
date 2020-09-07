import React from 'react';
import { Container } from 'unstated';
import { DependencyItem } from '../components';
import {
  fixABugExample,
  understandABugExample,
  experimentScenariosExample,
  breakpointExample,
} from '../assets/example-inputs/index';

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import '../dracula.css';

const files = [
  {
    name: 'fixABug.js',
    code: fixABugExample,
    watchVariables: ['courseName'],
    selected: false,
  },
  {
    name: 'understandABug.js',
    code: understandABugExample,
    watchVariables: ['courseNames', 'universityMean'],
    selected: false,
  },
  {
    name: 'experimentScenarios.js',
    code: experimentScenariosExample,
    watchVariables: ['realMean'],
    selected: false,
  },
  {
    name: 'breakpoint.js',
    code: breakpointExample,
    watchVariables: ['courseName'],
    selected: false,
  },
];
export default class AppContainer extends Container {
  constructor(props = {}) {
    super();
    this.state = {
      tabs: files,
      watchVariables: [],
      watchVariablesComboBox: false,
      snapshots: [],
      dependencies: [],
      code: '',
      isRunning: false,
      readOnly: false,
      timePointValues: {},
      selectedTimePoint: '',
      selectedTimePointDOM: '',
      displayedObjects: [],
      displayedObjectsNames: [],
      displayedObjectsDOM: [],
      copyStyle: 'Shallow Copy',
      implicitTimepoints: 'Normal',
    };
  }

  newEditor = (code) => {
    var options = {
      theme: 'dracula',
      tabSize: 4,
      keyMap: 'sublime',
      mode: 'js',
      lineNumbers: true,
    };

    return <CodeMirror onChange={(e) => {}} value={code} options={options} />;
  };

  getSelectedEditor = () => {
    const { tabs } = this.state;
    const selectedTab = tabs.find((tab) => tab.selected === true);
    if (selectedTab) return selectedTab.editor;
    return this.setDefaultTab();
  };

  createEditors = () => {
    this.setState((prevState) => {
      return prevState.tabs.map((tab) => {
        tab.editor = this.newEditor(tab.code);
        return tab;
      });
    });
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
    // update code
    this.updateCode(tabs[newSelectedTabIndex].code);
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
      watchVariables: [],
      selected: false,
    };
    tab.editor = this.newEditor('');

    let tabs = this.state.tabs;
    tabs.push(tab);

    await this.setState((prevState) => {
      return {
        ...prevState,
        tabs,
      };
    });

    await this.selectTab(tab.name);
  };

  saveTabName = (name) => {
    if (name.substr(-3) != '.js') name = name.concat('.js');

    this.setState((prevState) => {
      return prevState.tabs.map((tab) => {
        if (!Boolean(tab.name)) tab.name = name;
        return tab;
      });
    });
  };

  updateTabs = (tabs, callback) => {
    this.setState(
      {
        tabs,
      },
      callback,
    );
  };

  selectTimepointById = (id) => {
    let target = '';

    if (this.state.selectedTimePointDOM) {
      this.state.selectedTimePointDOM.classList.remove('timepoint-button-selected');
      this.state.selectedTimePointDOM.classList.add('timepoint-button');
    }

    let elements = document.getElementsByClassName('timepoints-buttons')[0].childNodes;
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].getAttribute('kont') === id) {
        target = elements[i];
      }
    }

    if (target) {
      target.classList.remove('timepoint-button');
      target.classList.add('timepoint-button-selected');
    }

    global.heap.snapshots.forEach((el) => {
      if (el.timePointId === id) {
        this.setState({
          timePointValues: el,
          selectedTimePoint: id,
          selectedTimePointDOM: target,
        });
      }
    });

    global.breakpoint = {
      name: '',
      activate: false,
    };
  };

  updateCode = (ev) => {
    if (typeof ev == 'string') {
      this.setState({
        code: ev,
      });
    } else {
      this.setState({
        code: ev.getValue(),
      });
    }
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
      selectedTimePointDOM: '',
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

  selectTimePoint = (ev) => {
    if (this.state.selectedTimePointDOM) {
      this.state.selectedTimePointDOM.classList.remove('timepoint-button-selected');
      this.state.selectedTimePointDOM.classList.add('timepoint-button');
    }

    ev.currentTarget.classList.remove('timepoint-button');
    ev.currentTarget.classList.add('timepoint-button-selected');

    global.heap.snapshots.forEach((el) => {
      if (el.timePointId === ev.currentTarget.getAttribute('id')) {
        this.setState({
          timePointValues: el,
          selectedTimePoint: ev.currentTarget.getAttribute('id'),
          selectedTimePointDOM: ev.currentTarget,
        });
      }
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

  toggleWatchVariables = (ev) => {
    this.setState({
      watchVariablesComboBox: !this.state.watchVariablesComboBox,
    });
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

    if (newWatchVariable.value) {
      this.setState({
        watchVariables: [...this.state.watchVariables, newWatchVariable.value],
      });
      global.dependencies.push({ name: newWatchVariable.value, type: 'normal' });
      newWatchVariable.value = '';
    }
  };
}
