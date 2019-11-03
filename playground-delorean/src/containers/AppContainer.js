import React from 'react';
import { Container } from 'unstated';

import Dependency from '../components/state/Dependency';

import example0 from '../../../example/input0';
import example1 from '../../../example/input1';
import example2 from '../../../example/input2';
import example3 from '../../../example/input3';

global.delorean = require('../../../src/delorean.js');
global.vm = require('../../../unwinder/runtime/vm.js');

export default class AppContainer extends Container {

    constructor(props = {}) {
        super();
		this.state = {
            tabs: [
                {
                    name: "fixABug.js",
                    input: example1
                },
                {
                    name: "understandABug.js",
                    input: example2
                },
                {
                    name: "experimentScenarios.js",
                    input: example3
                }
            ],
            tabSelected: "",
            snapshots: [],
            dependencies: [],
            code: example0,
            isRunning: false,
            readOnly: false,
            selected: false,
            selectedTarget: "",
            timePointValues: {},
            selectedTimePoint: '',
            selectedTimePointDOM: '',
            displayedObjects: [],
            displayedObjectsNames: [],
            displayedObjectsDOM: [],
        };
    }

    updateCode = ev => {
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

    clean = () => {
        global.heap = {
            dependencies: {},
            snapshots: []
        };
        global.continuations = {};
        global.snapshotCounter = 0;
        this.setState({
            snapshots: [],
            dependencies: [],
            timePointValues: {},
            selectedTimePoint: '',
            selectedTimePointDOM: '',
            displayedObjects: [],
            displayedObjectsNames: [],
            displayedObjectsDOM: [],
        })
    };

    selectTabColor = ev => {
        if (this.state.selected) {
            this.state.selectedTarget.classList.remove("selected");
        } else {
            this.setState({
                selected: true
            });
        }
        ev.currentTarget.classList.add("selected");
        this.setState({
            selectedTarget: ev.currentTarget
        });
    };

    updateSnapshots = snapshots => {
        this.setState({
            snapshots
        });
    };

    updateDependencies = dependencies => {
        this.setState({
            dependencies
        });
    };

    toggleIsRunning = () => {
        this.setState({
            isRunning: !this.state.isRunning,
            readOnly: !this.state.readOnly
        });
    };

    selectTimePoint = ev => {
        if (this.state.selectedTimePointDOM) {
            this.state.selectedTimePointDOM.classList.remove('timepoint-button-selected')
            this.state.selectedTimePointDOM.classList.add('timepoint-button')
        }

        ev.currentTarget.classList.remove('timepoint-button')
        ev.currentTarget.classList.add('timepoint-button-selected')

        global.heap.snapshots.forEach(el => {
            if (el.timePointId === ev.currentTarget.getAttribute('id')) {
                this.setState({
                    timePointValues: el,
                    selectedTimePoint: ev.currentTarget.getAttribute('id'),
                    selectedTimePointDOM: ev.currentTarget,
                })
            }
        })
    }

    toggleObject = (ev, object, name) => {
        
        let index = this.state.displayedObjectsNames.indexOf(name);

        if(index < 0){
            let displayedObjects = [...this.state.displayedObjects, object];
            let displayedObjectsNames = [...this.state.displayedObjectsNames, name];
            let displayedObjectsDOM = [...this.state.displayedObjectsDOM, []];

            for(let value in object){
                let element = displayedObjects[displayedObjects.length - 1][value];

                displayedObjectsDOM[displayedObjects.length - 1].push(
                    <Dependency 
                        key={name+"-"+value}
                        element={element}
                        name={name+"-"+value}
                        type={typeof(element)}
                        toggleObject={this.toggleObject}
                        displayedObjectsNames={displayedObjectsNames}
                        displayedObjectsDOM={displayedObjectsDOM}
                        input={name+"-"+value}
                    />
                )
            }

            this.setState({
                displayedObjects,
                displayedObjectsNames,
                displayedObjectsDOM,
            })

        } else {
            this.state.displayedObjects.splice(index, 1);
            this.state.displayedObjectsNames.splice(index, 1);
            this.state.displayedObjectsDOM.splice(index, 1)

            let displayedObjects = this.state.displayedObjects;
            let displayedObjectsNames = this.state.displayedObjectsNames;
            let displayedObjectsDOM = this.state.displayedObjectsDOM;

            this.setState({
                displayedObjects,
                displayedObjectsNames,
                displayedObjectsDOM,
            })
        }
    }
};