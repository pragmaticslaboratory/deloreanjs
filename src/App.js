import React, { Component, createRef } from 'react';
import { Layout, Console, TimelineViewer, Header, EditorBar, Sidebar, FAB } from './components';
import SimpleBar from 'simplebar-react';
import './App.css';

import intro from './introduction';
global.delorean = require('./core/delorean.js'); // this line allow uses global variables form core/delorean (global.breakpoint -> state.js)
const debuggerDelorean = require('./core/debugger');

class App extends Component {
  constructor(props) {
    super(props);
    this.consoleFeed = createRef();
    this.saveCode();
    this.addWatchVariable();
  }

  addWatchVariable = () => {
    document.addEventListener(
      'keydown',
      (e) => {
        if (e.keyCode == 13) {
          e.preventDefault();
          let el = document.activeElement;
          if (el.classList.contains('watch-variable-input')) {
            this.props.store.addVariable();
          }
        }
      },
      false,
    );
  };

  saveCode = () => {
    document.addEventListener(
      'keydown',
      (e) => {
        if (e.keyCode == 83 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)) {
          e.preventDefault();
          this.props.store.saveCode();
        }
      },
      false,
    );
  };

  executeCode = () => {
    const { store } = this.props;
    try {
      this.consoleFeed.current.state.logs = [];
      const [tab] = store.getSelectedTab();
      debuggerDelorean.init(tab.savedCode);
      store.updateDependencies(global.heap.dependencies);
      store.updateSnapshots(global.heap.snapshots);
      store.toggleIsRunning();
    } catch (error) {
      console.error(error);
    }
  };

  stopExecution = () => {
    const { store } = this.props;
    this.consoleFeed.current.state.logs = [];
    store.toggleIsRunning();
    store.clean(store.state.watchVariables);
    global.timeLine = 0;
    global.startFrom = '';
  };

  invokeContinuation = () => {
    const { store } = this.props;
    if (store.state.selectedTimePoint) {
      this.consoleFeed.current.state.logs = [];
      debuggerDelorean.invokeContinuation(store.state.selectedTimePoint);
      store.updateSnapshots(global.heap.snapshots);
    } else {
      alert('Please, select your Timepoint!');
    }
  };

  render() {
    return (
      <Layout>
        <div className="main-page-container">
          <Header intro={intro} />
          <div className="playground-container">
            <Sidebar appStore={this.props.store} />
            <div className="playground-content-container">
              <div className="top-panel">
                <div className="codemirror-container">
                  <div className="editor-bar-container-fixed">
                    <SimpleBar>
                      <EditorBar
                        appStore={this.props.store}
                        selectTab={this.selectTab}
                        executeCode={this.executeCode}
                        stopExecution={this.stopExecution}
                      />
                    </SimpleBar>
                  </div>
                  <SimpleBar style={{ maxHeight: '40vh' }}>
                    {this.props.store.getSelectedEditor()}
                  </SimpleBar>
                </div>
                <div className="console-container">
                  <Console ref={this.consoleFeed} />
                </div>
              </div>
              <div className="bottom-panel">
                <TimelineViewer
                  store={this.props.store}
                  getEndTimes={debuggerDelorean.getEndTimes}
                />
              </div>
            </div>
            <FAB
              appStore={this.props.store}
              executeCode={this.executeCode}
              stopExecution={this.stopExecution}
              invokeContinuation={this.invokeContinuation}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default App;
