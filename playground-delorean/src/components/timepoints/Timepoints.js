import React from 'react'
import './Timepoints.css'
import timepointIcon from '../../../public/assets/time.png'

import P5Wrapper from 'react-p5-wrapper';
import sketch from '../../p5/main';


const Timepoints = (props) => {
    const { selectTimePoint } = props.appStore;
    const { snapshots, selectedTimePoint } = props.appStore.state;

    return (
        <div className="timepoints-panel">
            <div className="timeponts-bar-container">
                <p>Timepoints</p>

                <div id="switch-container" className="switch-container" onClick={(ev) => props.appStore.toggleCopy(ev)}>
                    <p className="swtich-options selected-switch">Deep Copy</p>
                    <p className="swtich-options">Shallow Copy</p>
                </div>
                
                <div id="switch-container" className="switch-container" onClick={(ev) => props.appStore.toggleImplicit(ev)}>
                    <p className="swtich-options selected-switch">Normal</p>
                    <p className="swtich-options">Implicit</p>
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
                
                <div className="p5-container">
                    <P5Wrapper 
                        sketch={sketch}
                        selectedTimePoint={selectedTimePoint} 
                        snapshots={snapshots}
                    />
                </div>
            </div>
        </div>
    )
}

export default Timepoints;