import React from 'react'
import Tab from './Tab'
import './EditorBar.css'
import playButton from '../../../public/assets/play-button.png'
import pauseButton from '../../../public/assets/pause.png'

const EditorBar = (props) => {
    const { tabs, selectTab, isRunning, executeCode, stopExecution } = props;
    return (
        <div className="editor-bar-container">
            <div className="tabs-container">
                {
                    tabs.map((tab) => {
                        return (
                        <Tab
                            key={tab.name}
                            name={tab.name}
                            input={tab.input}
                            selectTab={selectTab}
                        />
                        )
                    })
                }
                {/* <div className="add-tab">
                    Add +
                </div> */}
            </div>
        <div className="btns-editor-container">
            {
                !isRunning ? 
                    <div className="btn-play-container" onClick={executeCode}>
                        <p>Run</p>
                        <img alt="run logo" className="btn-play" src={playButton} />
                    </div>
                    :
                    <div className="btn-pause-container" onClick={stopExecution}>
                        <p>Stop</p>
                        <img alt="stop logo" className="btn-pause" src={pauseButton} />
                    </div>
            }
        </div>
      </div>
    )
}

export default EditorBar;