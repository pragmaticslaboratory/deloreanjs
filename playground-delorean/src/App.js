import React, { Component } from "react";
import "./App.css";

import debuggerDelorean from "../../src/debugger";
import Layout from "./components/Layout";
// import Editor from "./components/Editor";
import Console from "./components/Console";
import Output from "./components/Output";
import StatusBar from "./components/StatusBar";

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/neo.css';

// import CodeMirror from "react-codemirror";
// import "codemirror/lib/codemirror.css";
// import "codemirror/mode/javascript/javascript";

import example1 from "../../example/input1";
import example2 from "../../example/input2";
import example3 from "../../example/input3";

global.delorean = require("../../src/delorean.js");
global.vm = require("../../unwinder/runtime/vm.js");

class App extends Component {
  state = {
    tabs: [
      {
        name: "example1.js",
        input: example1
      },
      {
        name: "example2.js",
        input: example2
      },
      {
        name: "example3.js",
        input: example3
      }
    ],
    tabSelected: "",
    snapshots: [],
    dependencies: [],
    code: "",
    isRunning: false,
    readOnly: false
  };

  updateCode = code => {
    this.setState({
      code
    });
  };

  selectTab = ev => {
    let example = this.state.tabs.find(
      o => o.name === ev.currentTarget.firstChild.getAttribute("name")
    );
    this.updateCode(example.input);
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

  toggleReadOnly = () => {
    this.setState({
        readOnly: !this.state.readOnly
      }
    );
  };

  toggleIsRunning = () => {
    this.setState({
      isRunning: !this.state.isRunning
    })
  }

  executeCode = () => {
    try {
      this.toggleIsRunning();
      this.toggleReadOnly();
      debuggerDelorean.init(this.state.code);
      this.updateDependencies(global.heap.dependencies);
      this.updateSnapshots(global.heap.snapshots);
    } catch (error) {
      console.error(error);
    }
  };

  invokeContinuation = ev => {
    let kont = ev.currentTarget.attributes["kont"].value;
    debuggerDelorean.invokeContinuation(kont);
  };

  stopExecution = () => {
    // Clear all
    this.toggleReadOnly();
    this.toggleIsRunning();
  };

  render() {
    var options = {
      lineNumbers: true,
      mode: "javascript",
      readOnly: this.state.readOnly
    };
    return (
      <Layout>
        <StatusBar
          tabs={this.state.tabs}
          selectTab={this.selectTab}
          executeCode={this.executeCode}
          stopExecution={this.stopExecution}
          isRunning={this.state.isRunning}
        />
        <div className="playground-container">
          <div className="left-panel">
            <div className="editor-container">
              <CodeMirror
                value={this.state.code}
                options={{
                  theme: 'neo',
                  tabSize: 2,
                  keyMap: 'sublime',
                  mode: 'js',
                }}
              >
              </CodeMirror>
            </div>
            <Console />
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
