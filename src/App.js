import React, { Component, createRef } from 'react';
import { Layout, Console, Timeline, Header, EditorBar, Sidebar, FAB } from './components';
import './App.css';

global.delorean = require('./core/delorean.js'); // this line allow uses global variables form core/delorean (global.breakpoint -> state.js)
const debuggerDelorean = require('./core/debugger');

class App extends Component {
  constructor(props) {
    super(props);
    this.consoleFeed = createRef();
    // props.store.createEditors();
  }

  executeCode = () => {
    const { store } = this.props;
    try {
      const [tab] = store.getSelectedTab();
      console.log([tab.code, tab.savedCode]);
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
          <Header />
          <div className="playground-container">
            <Sidebar appStore={this.props.store} />
            <div className="playground-content-container">
              <div className="top-panel">
                <div className="codemirror-container">
                  <div className="editor-bar-container-fixed">
                    <EditorBar
                      appStore={this.props.store}
                      selectTab={this.selectTab}
                      executeCode={this.executeCode}
                      stopExecution={this.stopExecution}
                    />
                  </div>
                  {this.props.store.getSelectedEditor()}
                </div>
                <div className="console-container">
                  <Console ref={this.consoleFeed} />
                </div>
              </div>
              <div className="bottom-panel">
                <Timeline
                  appStore={this.props.store}
                  invokeContinuation={this.invokeContinuation}
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
