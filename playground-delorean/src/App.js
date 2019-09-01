import React, { Component, createRef } from "react";
import "./App.css";

import debuggerDelorean from "../../src/debugger";

import Layout from "./components/layout/Layout";
import Console from "./components/console/Console";
import Output from "./components/layout/Output";
import StatusBar from "./components/header/StatusBar";
import EditorBar from './components/editor/EditorBar';
import Dependency from './components/state/Dependency';

import CodeMirror from "@uiw/react-codemirror";
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/neo.css';

import example0 from "../../example/input0";
import example1 from "../../example/input1";
import example2 from "../../example/input2";
import example3 from "../../example/input3";

global.delorean = require("../../src/delorean.js");
global.vm = require("../../unwinder/runtime/vm.js");
class App extends Component {
    state = {
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

    constructor(props) {
        super(props)
        this.consoleFeed = createRef();
        this.editor = createRef();
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

    selectTab = ev => {
        if (!this.state.isRunning) {
            let example = this.state.tabs.find(
                o => o.name === ev.currentTarget.firstChild.getAttribute("name")
            );
            this.updateCode(example.input);
            this.selectTabColor(ev);
            this.clean();
        } else {
            alert('Sorry, you need stop this execution before change the code! :)')
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
    }

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

    executeCode = () => {
        try {
            this.toggleIsRunning();
            debuggerDelorean.init(this.state.code);
            this.updateDependencies(global.heap.dependencies);
            this.updateSnapshots(global.heap.snapshots);
        } catch (error) {
            console.error(error);
        }
    };

    invokeContinuation = (ev) => {
        if(this.state.selectedTimePoint) {
            this.consoleFeed.current.state.logs = [];
            // let kont = ev.currentTarget.attributes["kont"].value;
            debuggerDelorean.invokeContinuation(this.state.selectedTimePoint);
            this.updateSnapshots(global.heap.snapshots);
        } else {
            alert('Please, select your Timepoint!')
        }
    };

    stopExecution = () => {
        this.consoleFeed.current.state.logs = [];
        this.editor.current.editor.setOption('readOnly', false);
        this.toggleIsRunning();
        this.clean();
        global.timeLine = 0;
        global.startFrom = '';
    };

    render() {
        var options = {
            theme: "neo",
            tabSize: 4,
            keyMap: "sublime",
            mode: "js",
            lineNumbers: true,
            readOnly: this.state.readOnly
        };

        return (
            <Layout className="layout-container">

                <StatusBar
                    tabs={this.state.tabs}
                    selectTab={this.selectTab}
                />

                <div className="playground-container">

                    <div className="top-panel">
                        <div className="codemirror-container">
                            <div className="editor-bar-container-fixed">
                                <EditorBar
                                    tabs={this.state.tabs}
                                    selectTab={this.selectTab}
                                    executeCode={this.executeCode}
                                    stopExecution={this.stopExecution}
                                    isRunning={this.state.isRunning}
                                />
                            </div>
                            <div className="editor-container">
                                <CodeMirror
                                    ref={this.editor}
                                    value={this.state.code}
                                    options={options}
                                    onChange={this.updateCode}
                                />
                            </div>
                        </div>

                        <Console
                            ref={this.consoleFeed}
                        />

                    </div>

                    <div className="bottom-panel">
                        <Output
                            toggleObject={this.toggleObject}

                            displayedObjects={this.state.displayedObjects}
                            displayedObjectsNames={this.state.displayedObjectsNames}
                            displayedObjectsDOM={this.state.displayedObjectsDOM}

                            timePointValues={this.state.timePointValues}
                            snapshots={this.state.snapshots}
                            dependencies={this.state.dependencies}
                            invokeContinuation={this.invokeContinuation}
                            selectTimePoint={this.selectTimePoint}
                            selectedTimePoint={this.state.selectedTimePoint}
                            isRunning={this.state.isRunning}
                        />
                    </div>

                </div>
            </Layout>
        );
    }
}

export default App;
