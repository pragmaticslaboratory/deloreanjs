import React from 'react'
import { TextField } from "@material-ui/core";
import resumeButton from '../../public/assets/fast-forward.png'
import rightArrow from '../../public/assets/right-arrow.png'
import expandButton from '../../public/assets/expand-button.png'
import './State.css'

const State = (props) => {
    const { selectedTimePoint, dependencies, timePointValues, isRunning, invokeContinuation, toggleObject, selectedObject, shownObject } = props;
    let shownObjectDOM = [];
    if(shownObject){
        for(let value in shownObject){
            shownObjectDOM.push(
                <div key={value} className="object-shown">
                    <p>{value}</p>
                    <p>{shownObject[value]}</p>
                    <TextField />
                </div>
            )
        }
    }

    return (
        <div className="state-panel-container">
            <div className="state-container">
                <div className="state-title-container">
                    <p className="state-title">State of <b>{(selectedTimePoint) ? selectedTimePoint : "(Not selected)"}</b></p>
                    {
                        isRunning && 
                            <div className="btn-resume-container" onClick={invokeContinuation}>
                                <p>Resume</p>
                                <img alt="resume logo" src={resumeButton} className="btn-resume" />
                            </div>
                    }
                </div>

                <div className="state-table-titles-container">
                    <p><b>Variable</b></p>
                    <p><b>Current Value</b></p>
                    <p><b>New Value</b></p>
                </div>
                
                <div className="state-values-container">
                    {
                        dependencies.map(dependency => {
                            let element = timePointValues[dependency.name];
                            return (selectedTimePoint === '') ?
                                // No hay ningun timepoint seleccionado
                                <div key={dependency.name} className="state-values">
                                    <p>{(dependency.type !== 'loop') ? dependency.name : dependency.name + " (loop)"}</p>
                                </div>                      
                                :
                                // Hay un timepoint seleccionado
                                (typeof element == 'object') ?
                                    // La dependencia es un objeto
                                    (selectedObject === dependency.name) ?
                                        // El objeto esta seleccionado
                                        <div key={dependency.name}>
                                            <div  className="state-values-object" onClick={(ev) => { toggleObject(ev, element, dependency.name) }}>
                                                <div className="object-expand-container">
                                                    <img style={{ marginRight: "8px"  }} alt="expand icon" src={expandButton} height="10"/>
                                                    <p>{(dependency.type !== 'loop') ? dependency.name : dependency.name + " (loop)"}</p>
                                                </div>
                                                <p></p>
                                                <p>[Object]</p>
                                            </div>
                                            <div>
                                                {shownObjectDOM}
                                            </div>
                                        </div>
                                        :
                                        // El objeto no esta seleccionado
                                        <div key={dependency.name} className="state-values-object" onClick={(ev) => { toggleObject(ev, element, dependency.name) }}>
                                            <div className="object-expand-container">
                                                <img style={{ marginRight: "8px"  }} alt="right icon" src={rightArrow} height="10"/>
                                                <p>{(dependency.type !== 'loop') ? dependency.name : dependency.name + " (loop)"}</p>
                                            </div>
                                            <p></p>
                                            <p>[Object]</p>
                                        </div>
                                    :
                                    // La dependencia no es un objeto
                                    <div key={dependency.name} className="state-values">
                                        <p>{(dependency.type !== 'loop') ? dependency.name : dependency.name + " (loop)"}</p>
                                        <p>{(typeof element == 'number' || element) ? element.toString() : "undefined" }</p>
                                        <TextField
                                            id={`input-${dependency.name}`}
                                        />
                                    </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default State;