import React from 'react'
import { Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

const Timepoints = (props) => {
    return (
        <div className="container-buttons">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2 style={{display: "inline"}}>Timepoints</h2>
                <div style={{ display: "inline" }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        className={props.classes.button}
                        onClick={props.invokeContinuation}
                    >
                        Resume
                        <Icon className={props.classes.rightIcon}>
                            play_circle_filled
                        </Icon>
                    </Button>
                </div>
            </div>
            <hr />
            {props.snapshots.map(snapshot => {
                return (
                <Button
                    kont={snapshot.timePointId}
                    id={snapshot.timePointId}
                    key={snapshot.timePointId}
                    variant="contained"
                    color="primary"
                    size="small"
                    className={props.classes.button}
                    onClick={props.selectTimePoint}
                >
                    TimePoint {snapshot.timePointId}
                </Button>
                );
            })}
        </div>
    )
}

export default Timepoints