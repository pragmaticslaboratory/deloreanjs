import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout'
import Editor from './components/Editor'
import Console  from './components/Console'
import Output  from './components/Output'

class App extends Component {
  render() {
    return (
      <Layout>
          <div className="left-panel">
            <Editor></Editor>
            <Console></Console>  
          </div>
          <div className="right-panel">
            <Output></Output>
          </div>
      </Layout>
    );
  }
}

export default App;
