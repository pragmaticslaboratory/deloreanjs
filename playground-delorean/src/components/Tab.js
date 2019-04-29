import React from 'react'

const Tab = (props) => {
    return (
        <div className="tab-container" onClick={props.selectTab}>
            <h4 name={props.name} >{props.name}</h4>
        </div>
    )
}

export default Tab;