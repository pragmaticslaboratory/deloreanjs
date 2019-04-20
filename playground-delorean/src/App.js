import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout'
import Editor from './components/Editor'
import Console  from './components/Console'
import Output  from './components/Output'
import StatusBar from './components/StatusBar'


class App extends Component {

  state = {
    tabs: [],
    code: `console.log('Hello World!')`, 
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
      code,
    })
  }

  executeCode = () => {
    try {
      (new Function(this.state.code))();
    } catch (error) {
      console.error(error);
    }
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
              <Output></Output>
            </div>
          </div>
      </Layout>
    );
  }
}

export default App;
