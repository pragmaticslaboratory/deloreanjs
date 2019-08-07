import React from 'react'
import { TextField } from "@material-ui/core";

const State = (props) => {
    const { selectedTimePoint, dependencies, timePointValues } = props;
    return (
        <div className="state-container">
            <div className="state-title-container">
                <p className="state-title">State of <b>{(selectedTimePoint) ? selectedTimePoint : "(Not selected)"}</b></p>
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
    )
}

export default State;