import React, { Component } from 'react';

import Timepoints from '../Timepoints';
import './styles.css';

class Output extends Component {
  render() {
    return (
      <>
        <Timepoints appStore={this.props.appStore} />
        <div className="output-timeline-container">asd</div>
      </>
    );
  }
}

export default Output;
