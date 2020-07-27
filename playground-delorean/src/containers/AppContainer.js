import React from 'react';
import { Container } from 'unstated';

import { DependencyItem } from '../components';

import {
  objectsExample,
  fixABugExample,
  understandABugExample,
  experimentScenariosExample,
  breakpointExample,
} from '../../public/example-inputs/index';

global.delorean = require('../../../src/delorean.js');

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
      code: objectsExample,
      isRunning: false,
      readOnly: false,
      selected: false,
      selectedTarget: '',
      timePointValues: {},
      selectedTimePoint: '',
      selectedTimePointDOM: '',
      displayedObjects: [],
      displayedObjectsNames: [],
      displayedObjectsDOM: [],
      copyStyle: 'Deep Copy',
      implicitTimpeoints: 'Normal',
    };
  }

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

  selectTabColor = (ev) => {
    if (this.state.selected) {
      this.state.selectedTarget.classList.remove('selected');
    } else {
      this.setState({
        selected: true,
      });
    }
    ev.currentTarget.classList.add('selected');
    this.setState({
      selectedTarget: ev.currentTarget,
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

  toggleCopy = (ev) => {
    if (!this.state.isRunning) {
      if (ev.target.innerHTML === this.state.copyStyle) {
        return;
      } else {
        let switchOptions = ev.currentTarget;
        for (let i = 0; i < switchOptions.childNodes.length; i++) {
          if (switchOptions.childNodes[i].classList.contains('selected-switch')) {
            switchOptions.childNodes[i].classList.remove('selected-switch');
          }
        }
        ev.target.classList.add('selected-switch');
        this.setState({
          copyStyle: ev.target.innerHTML,
        });
      }
    } else {
      alert('Sorry, you need stop this execution before change the copy mode! :)');
      return;
    }
  };

  toggleImplicit = (ev) => {
    if (!this.state.isRunning) {
      if (ev.target.innerHTML === this.state.implicitTimpeoints) {
        return;
      } else {
        let switchOptions = ev.currentTarget;
        for (let i = 0; i < switchOptions.childNodes.length; i++) {
          if (switchOptions.childNodes[i].classList.contains('selected-switch')) {
            switchOptions.childNodes[i].classList.remove('selected-switch');
          }
        }
        ev.target.classList.add('selected-switch');
        this.setState({
          implicitTimpeoints: ev.target.innerHTML,
        });

        global.implicitTimpeoints = !global.implicitTimpeoints;
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
