import React from 'react'

const Tab = (props) => {
    return (
        <div className="tab-container" onClick={props.selectTab}>
            <p name={props.name} >{props.name}</p>
        </div>
    )
}

export default Tab;