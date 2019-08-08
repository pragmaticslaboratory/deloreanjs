import React from 'react'
import { TextField } from "@material-ui/core";
import resumeButton from '../../public/assets/fast-forward.png'
import './State.css'

const State = (props) => {
    const { selectedTimePoint, dependencies, timePointValues, isRunning, invokeContinuation } = props;
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
                            return (
                                <div key={dependency.name} className="state-values">
                                    <p>{(dependency.type !== 'loop') ? dependency.name : dependency.name + " (loop)"}</p>
                                    <p>{(typeof timePointValues[dependency.name] == 'number' || timePointValues[dependency.name]) ? timePointValues[dependency.name] : "undefined" }</p>
                                    <TextField
                                        id={`input-${dependency.name}`}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* <div className="footer">
                    footer
            </div> */}
        </div>
    )
}

export default State;