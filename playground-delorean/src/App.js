import React, { Component, createRef } from "react";
import "./App.css";

import debuggerDelorean from "../../src/debugger";
import Layout from "./components/Layout";
import Console from "./components/Console";
import Output from "./components/Output";
import StatusBar from "./components/StatusBar";

import CodeMirror from "@uiw/react-codemirror";
import "codemirror/addon/display/autorefresh";
import "codemirror/addon/comment/comment";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/keymap/sublime";
import "codemirror/theme/neo.css";

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
        name: "repairingBugs.js",
        input: example1
      },
      {
        name: "wastingTimeBugs.js",
        input: example2
      },
      {
        name: "testingScenarios.js",
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
  };

  constructor(props){
    super(props)
    this.consoleFeed = createRef();
    this.editor = createRef();
  }

  updateCode = ev => {
    if(typeof ev == 'string'){
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

    if(this.state.selectedTimePointDOM){
      this.state.selectedTimePointDOM.classList.remove('MuiButton-containedSecondary-18')
      this.state.selectedTimePointDOM.classList.remove('MuiButton-raisedSecondary-21')
      this.state.selectedTimePointDOM.classList.add('MuiButton-containedPrimary-17')
      this.state.selectedTimePointDOM.classList.add('MuiButton-raiedPrimary-20')
    }

    ev.currentTarget.classList.remove('MuiButton-containedPrimary-17')
    ev.currentTarget.classList.remove('MuiButton-raiedPrimary-20')
    ev.currentTarget.classList.add('MuiButton-containedSecondary-18')
    ev.currentTarget.classList.add('MuiButton-raisedSecondary-21')

    global.heap.snapshots.forEach(el => {
      if(el.timePointId === ev.currentTarget.getAttribute('id')){
        this.setState({
          timePointValues: el,
          selectedTimePoint: ev.currentTarget.getAttribute('id'),
          selectedTimePointDOM: ev.currentTarget,
        })
      }
    })
  }

  selectTab = ev => {
    if(!this.state.isRunning){
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
    this.consoleFeed.current.state.logs = [];
    // let kont = ev.currentTarget.attributes["kont"].value;
    debuggerDelorean.invokeContinuation(this.state.selectedTimePoint);
    this.updateSnapshots(global.heap.snapshots);
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
      tabSize: 2,
      keyMap: "sublime",
      mode: "js",
      lineNumbers: true,
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
                ref={this.editor}
                value={this.state.code}
                options={options}
                onChange={this.updateCode}
              />
            </div>
            <Console 
              ref={this.consoleFeed} 
            />
          </div>
          <div className="right-panel">
            <Output
              timePointValues={this.state.timePointValues}
              snapshots={this.state.snapshots}
              dependencies={this.state.dependencies}
              invokeContinuation={this.invokeContinuation}
              selectTimePoint={this.selectTimePoint}
              selectedTimePoint={this.state.selectedTimePoint}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default App;
