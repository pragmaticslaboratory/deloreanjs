import React, { Component } from 'react'
import { Button, FormControl, InputLabel, OutlinedInput  } from '@material-ui/core'
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    formControl: {
      margin: theme.spacing.unit
    }
});
class Output extends Component {

    render(){
        const { classes } = this.props;
        let index = 0;
        return (
            <div>
                {
                    this.props.snapshots.length !== 0 ?
                    (
                        <div>
                            <div className="container inputs">
                                {
                                    this.props.dependencies.map((dependency) => {
                                        return (
                                            <FormControl key={dependency} className={classes.formControl} variant="outlined">
                                                <InputLabel
                                                ref={ref => {
                                                    this.labelRef = ReactDOM.findDOMNode(ref);
                                                }}
                                                htmlFor="component-outlined"
                                                >
                                                {dependency}
                                                </InputLabel>
                                                <OutlinedInput
                                                id="component-outlined"
                                                value={dependency}
                                                onChange={this.handleChange}
                                                labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                                                />
                                            </FormControl>
                                        )
                                    })
                                }
                            </div>
                            <div className="container-buttons">            
                                {
                                    this.props.snapshots.map((snapshot) => {
                                        return (
                                            <Button 
                                                kont={++index} 
                                                id={index}
                                                key={index}
                                                variant="contained" 
                                                color="primary"
                                                size="small"
                                                onClick={this.props.invokeContinuation}
                                            >
                                            kont {index}
                                            </Button>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h1>Welcome to Delorean JS</h1>
                            <p>Description: ...</p>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default withStyles(styles)(Output);

