import React, { Component } from 'react'
import StateBar from './StateBar';

import Dependency from './Dependency'
import './State.css'

class State extends Component {

    componentWillUpdate = () => {
        if(global.breakpoint.activate) this.props.appStore.selectTimepointById(global.breakpoint.id)
    }
    
    render() {

        const { selectedTimePoint, dependencies, timePointValues, displayedObjectsDOM, displayedObjectsNames } = this.props.appStore.state;
        const { toggleObject } = this.props.appStore;
        const { invokeContinuation } = this.props;

        return ( <div className="state-panel-container">
            <div className="state-container">
                <StateBar 
                    appStore={this.props.appStore}
                    invokeContinuation={invokeContinuation}
                />
                
                <div className="state-values-container">
                    {
                        (selectedTimePoint === '') ?
                            dependencies.map(dependency => {
                                return (
                                    <div key={dependency.name} className="state-values">
                                        <p>{(dependency.type !== 'loop') ? dependency.name : dependency.name + " (loop)"}</p>
                                    </div>
                                ) 
                            })
                            :
                            dependencies.map(dependency => {
                                let element = timePointValues[dependency.name];
                                return ( 
                                    <Dependency  
                                        key={dependency.name}
                                        element={element}
                                        name={dependency.name}
                                        type={dependency.type}
                                        timePointValues={timePointValues}
                                        toggleObject={toggleObject}
                                        displayedObjectsNames={displayedObjectsNames}
                                        displayedObjectsDOM={displayedObjectsDOM}
                                    />
                                )
                            })
                    }
                </div>
            </div>
        </div>)
    }
}

export default State;