import React, { Component } from 'react';
import './App.css';
import codeInput from '../../example/input'
import debuggerDelorean from '../../src/debugger'
import Layout from './components/Layout'
import Editor from './components/Editor'
import Console  from './components/Console'
import Output  from './components/Output'
import StatusBar from './components/StatusBar'

global.delorean = require('../../src/delorean.js')
global.vm = require('../../unwinder/runtime/vm.js');

console.log(global.heap)

class App extends Component {

  state = {
    tabs: [],
    snapshots: [],
    dependencies: [],
    code: codeInput, 
  }

  getInitialState = () => {
    this.newTab(`example.js`, `console.log('Hello World!')`)
  }

  newTab = (name, code) => {
    this.state.tabs.push({
      name,
      code
    })
  }

  updateCode = (code) => {
    this.setState({
      code,
    })
  }

  selectTab = () => {
    // setCode
  }

  setCode = (code) => {
    this.setState({
      code
    })
  }

  updateSnapshots = (snapshots) => {
    this.setState({
      snapshots
    })
  }

  updateDependencies = (dependencies) => {
    this.setState({
      dependencies
    })
  }

  executeCode = () => {
    try {
      debuggerDelorean.init(this.state.code);
      this.updateDependencies(global.heap.dependencies)
      this.updateSnapshots(global.heap.snapshots);
    } catch (error) {
      console.error(error);
    }
  }

  invokeContinuation = (ev) => {
    let kont = ev.currentTarget.attributes['kont'].value
    debuggerDelorean.invokeContinuation(kont)
  }

  render() {
    return (
      <Layout>
          <StatusBar 
            tabs={this.state.tabs}
            executeCode={this.executeCode}
          />
          <div className="playground-container">
            <div className="left-panel">
              <Editor
                code={this.state.code}
                updateCode={this.updateCode}
              />
              <Console></Console>  
            </div>
            <div className="right-panel">
              <Output
                snapshots={this.state.snapshots}
                dependencies={this.state.dependencies}
                invokeContinuation={this.invokeContinuation}
              />
            </div>
          </div>
      </Layout>
    );
  }
}

export default App;
