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
    code: '', 
  }

  newTab = (name, code) => {
    this.state.tabs.push({
      name,
      code
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

  render() {
    this.newTab(`example.js`, `console.log('Hello World!')`)
    return (
      <Layout>
          <StatusBar tabs={this.state.tabs}/>
          <div className="playground-container">
            <div className="left-panel">
              <Editor
                code={this.state.code}
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
