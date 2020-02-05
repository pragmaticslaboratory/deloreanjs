import React, { Component, createRef } from 'react';
import { Provider, Subscribe } from 'unstated';
import './App.css';

import debuggerDelorean from '../../src/debugger';

import Layout from './components/layout/Layout';
import Console from './components/console/Console';
import Output from './components/layout/Output';
import StatusBar from './components/header/StatusBar';
import EditorBar from './components/editor/EditorBar';
import WatchVariables from './components/watch/Watch';

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/neo.css';  
import AppContainer from './containers/AppContainer';

global.delorean = require('../../src/delorean.js');
global.vm = require('../../unwinder/runtime/vm.js');
class App extends Component {

    constructor(props) {
        super(props)
        this.consoleFeed = createRef();
        this.editor = createRef();
    }

    selectTab = (ev, appStore) => {
        if (!appStore.state.isRunning) {
            let example = appStore.state.tabs.find(
                o => o.name === ev.currentTarget.firstChild.getAttribute("name")
            );
            appStore.updateCode(example.input);
            appStore.selectTabColor(ev);
            appStore.clean();
        } else {
            alert('Sorry, you need stop this execution before change the code! :)')
        }
    };

    executeCode = (appStore) => {
        try {
            this.editor.current.editor.setOption('readOnly', true);
            appStore.toggleIsRunning();
            debuggerDelorean.init(appStore.state.code);
            appStore.updateDependencies(global.heap.dependencies);
            appStore.updateSnapshots(global.heap.snapshots);
        } catch (error) {
            console.error(error);
        }
    };

    stopExecution = (appStore) => {
        this.consoleFeed.current.state.logs = [];
        this.editor.current.editor.setOption('readOnly', false);
        appStore.toggleIsRunning();
        appStore.clean();
        global.timeLine = 0;
        global.startFrom = '';
    };

    invokeContinuation = (appStore) => {
        if(appStore.state.selectedTimePoint) {
            this.consoleFeed.current.state.logs = [];
            debuggerDelorean.invokeContinuation(appStore.state.selectedTimePoint);
            appStore.updateSnapshots(global.heap.snapshots);
        } else {
            alert('Please, select your Timepoint!')
        }
    };

    render() {
        var options = {
            theme: "neo",
            tabSize: 4,
            keyMap: "sublime",
            mode: "js",
            lineNumbers: true,
        };

        return (
            <Layout className="layout-container">
                <Provider>
                    <Subscribe to={[ AppContainer ]}>
                        {(appStore) => (
                            <>
                                <StatusBar />

                                <div className="playground-container">
                                    <div className="top-panel">
                                        <div className="codemirror-container">
                                            <div className="editor-bar-container-fixed">
                                                <EditorBar
                                                    appStore={appStore}
                                                    selectTab={this.selectTab}
                                                    executeCode={this.executeCode}
                                                    stopExecution={this.stopExecution}
                                                />
                                            </div>
                                            <div className="editor-container">
                                                <CodeMirror
                                                    ref={this.editor}
                                                    value={appStore.state.code}
                                                    options={options}
                                                    onChange={appStore.updateCode}
                                                />
                                            </div>
                                        </div>
                                        <div className="console-container">
                                            <WatchVariables 
                                                appStore={appStore}
                                            />
                                            <Console
                                                ref={this.consoleFeed}
                                            />
                                        </div>

                                    </div>

                                    <div className="bottom-panel">
                                        <Output
                                            appStore={appStore}
                                            invokeContinuation={this.invokeContinuation}
                                        />
                                    </div>

                                </div>
                            </>
                        )}
                    </Subscribe>
                </Provider>
            </Layout>
        );
    }
}

export default App;
