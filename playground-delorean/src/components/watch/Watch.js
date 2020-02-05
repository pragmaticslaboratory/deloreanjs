import React from "react";
import { TextField } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';
import './Watch.css';

const WatchVariables = (props) => {
    const {watchVariables} = props.appStore.state
    return (
        <div className="input-variables-container">
            <div className="watch-variables-bar">
                <div className="watch-variables-title">
                    <p>Watch Variables</p>
                </div>
            </div>
            
            <div className="watch-variables-content">                
                {
                    watchVariables.map(variable => <p key={variable}>{variable}</p>)
                }

                <div className="watch-variable-input">
                    <TextField id="watch-variable-input"></TextField>
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <IconButton onClick={props.appStore.addVariable}>
                            <AddCircle size="small"></AddCircle>
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchVariables;