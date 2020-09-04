import React from 'react';
import { Container } from 'unstated';
import { DependencyItem } from '../components';
import {
  objectsExample,
  fixABugExample,
  understandABugExample,
  experimentScenariosExample,
  breakpointExample,
} from '../assets/example-inputs/index';

export default class AppContainer extends Container {
  constructor(props = {}) {
    super();
    this.state = {
      tabs: [
        {
          name: 'fixABug.js',
          input: fixABugExample,
          watchVariables: ['courseName'],
        },
        {
          name: 'understandABug.js',
          input: understandABugExample,
          watchVariables: ['courseNames', 'universityMean'],
        },
        {
          name: 'experimentScenarios.js',
          input: experimentScenariosExample,
          watchVariables: ['realMean'],
        },
        {
          name: 'breakpoint.js',
          input: breakpointExample,
          watchVariables: ['courseName'],
        },
      ],
      tabSelected: '',
      watchVariables: [],
      watchVariablesComboBox: false,
      snapshots: [],
      dependencies: [],
      code: '',
      isRunning: false,
      readOnly: false,
      selectedTab: '',
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

    let elements = document.getElementsByClassName('timepoints-btns')[0].childNodes;
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

  selectTab = (tabElement) => {
    const tab = tabElement.parentNode;
    const selectedTab = this.state.selectedTab;

    if (Boolean(selectedTab)) {
      selectedTab.classList.add('tab-container');
      selectedTab.classList.remove('tab-selected');
    }

    tab.classList.add('tab-selected');
    tab.classList.remove('tab-container');

    this.setState({ selectedTab: tab });
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
