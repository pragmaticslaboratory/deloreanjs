import React, { Component } from 'react'
import { Button, TextField } from '@material-ui/core'

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
                                            <TextField
                                                id="standard-name"
                                                label={dependency}
                                                id={`input-${dependency}`}
                                                // value={this.state.name}
                                                // onChange={this.handleChange('name')}
                                                margin="normal"
                                                key={dependency}
                                            />
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

export default Output;

