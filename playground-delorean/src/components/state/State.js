import React from 'react'
import StateBar from './StateBar';

import Dependency from './Dependency'
import './State.css'

const State = (props) => {
    const { 
        selectedTimePoint, 
        isRunning, 
        invokeContinuation, 
        dependencies, 
        timePointValues, 
        toggleObject, 
        displayedObjectsNames,
        displayedObjectsDOM
    } = props;

    return (
        <div className="state-panel-container">
            <div className="state-container">
                <StateBar 
                    selectedTimePoint={selectedTimePoint}
                    isRunning={isRunning}
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
        </div>
    )
}

export default State;