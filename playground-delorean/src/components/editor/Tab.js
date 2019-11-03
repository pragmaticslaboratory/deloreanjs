import React from 'react'
import jsFile from '../../../public/assets/javascript.png'
import './Tab.css'

const Tab = (props) => {
    return (
        <div className="tab-container" onClick={ev => props.selectTab(ev, props.appStore)}>
            <img alt="file logo" name={props.name} className="file-icon" src={jsFile}></img>
            <p name={props.name} >{props.name}</p>
        </div>
    )
}

export default Tab;