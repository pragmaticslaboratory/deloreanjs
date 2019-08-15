import React, { Component } from "react";
import State from './State';
import Timepoints from './Timepoints';
import './Output.css'

class Output extends Component {
    render() {
        return (
            <div className="delorean-container">
                <Timepoints
                    snapshots={this.props.snapshots}
                    selectTimePoint={this.props.selectTimePoint}
                    selectedTimePoint={this.props.selectedTimePoint}
                />
                <State
                    toggleObject={this.props.toggleObject}
                    shownObject={this.props.shownObject}
                    selectedObject={this.props.selectedObject}
                    selectedTimePoint={this.props.selectedTimePoint}
                    dependencies={this.props.dependencies}
                    timePointValues={this.props.timePointValues}
                    isRunning={this.props.isRunning}
                    invokeContinuation={this.props.invokeContinuation}
                />
            </div>
        );
    }
}

export default Output;
