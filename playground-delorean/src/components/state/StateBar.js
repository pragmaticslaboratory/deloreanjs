import React from 'react'
import './StateBar.css'
import resumeButton from '../../../public/assets/fast-forward.png'

const StateBar = (props) => {
    const { 
        selectedTimePoint, 
        isRunning, 
        invokeContinuation, 
    } = props;

    return (
        <div>
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
        </div>
    )
}

export default StateBar;