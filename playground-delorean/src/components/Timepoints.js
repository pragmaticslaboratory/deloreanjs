import React from 'react'
import './Timepoints.css'

const Timepoints = (props) => {
    return (
        <div className="container-buttons">
            <div>
                <p>Timepoints</p>
            </div>
            <hr />
            {
                props.snapshots.map(snapshot => {
                    return (
                        <div 
                            className="timepoint-btn"
                            kont={snapshot.timePointId}
                            id={snapshot.timePointId}
                            key={snapshot.timePointId}
                            onClick={props.selectTimePoint}
                        >
                            <img alt="timepoint logo" className="icon-button-bar" src="https://diversity.github.com/assets/svg/mark-github.svg"></img>
                            TimePoint {snapshot.timePointId}
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Timepoints