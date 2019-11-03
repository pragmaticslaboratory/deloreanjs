import React, { Component } from "react";
import State from '../state/State';
import Timepoints from '../timepoints/Timepoints';
import './Output.css'

class Output extends Component {
    render() {
        
        return (
            <div className="delorean-container">
                <Timepoints
                    appStore={this.props.appStore}
                />
                <State
                    appStore={this.props.appStore}
                    invokeContinuation={this.props.invokeContinuation}
                />
            </div>
        );
    }
}

export default Output;
