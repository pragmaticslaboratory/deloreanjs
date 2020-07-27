import React, { Component } from 'react';
import State from '../State';
import Timepoints from '../Timepoints';
import './styles.css';

class Output extends Component {
  render() {
    return (
      <div className="delorean-container">
        <Timepoints appStore={this.props.appStore} />
        <State appStore={this.props.appStore} invokeContinuation={this.props.invokeContinuation} />
      </div>
    );
  }
}

export default Output;
