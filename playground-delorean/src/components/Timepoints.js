import React from 'react'
import './Timepoints.css'
import timepointIcon from '../../public/assets/time.png'

import P5Wrapper from 'react-p5-wrapper';
import sketch from '../p5/main';


const Timepoints = (props) => {
    const { snapshots, selectedTimePoint, selectTimePoint } = props;
    return (
        <div className="timepoints-panel">
            <div className="timeponts-bar-container">
                <p>Timepoints</p>

                <div>
                    "Btns Panel"
                </div>
            </div>

            <div className="timepoints-container">
                <div className="timepoints-btns">
                {
                    snapshots.map(snapshot => {
                        return (
                            <div className="timepoint-button" onClick={selectTimePoint} kont={snapshot.timePointId} id={snapshot.timePointId} key={snapshot.timePointId}>
                                <img alt="timepoint logo" className="icon-timepoint" src={timepointIcon}></img>
                                {snapshot.timePointId}
                            </div>
                        );
                    })
                }
                </div>
                
                <P5Wrapper 
                    sketch={sketch}
                    selectedTimePoint={selectedTimePoint} 
                    snapshots={snapshots}
                />
            </div>
        </div>
    )
}

export default Timepoints;