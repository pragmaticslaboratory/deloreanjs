import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import { Button, TextField } from '@material-ui/core'

class Output extends Component {

    render(){
        const markdown = require('./markdown');
        let index = 0;
        return (
            <div>
                {
                    this.props.snapshots.length !== 0 ?
                    (
                        <div className="output-container">
                            <div className="container-inputs">
                                <h2>Heap</h2>
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
                                                style={{
                                                    margin:'5px'
                                                }}
                                            />
                                        )
                                    })
                                }
                            </div>
                            <div className="container-buttons">
                                <h2>Continuations</h2>            
                                {
                                    this.props.snapshots.map((snapshot) => {
                                        return (
                                            <Button 
                                                className="heap-input"
                                                kont={++index} 
                                                id={index}
                                                key={index}
                                                variant="contained" 
                                                color="primary"
                                                size="small"
                                                style={{
                                                    margin:'5px'
                                                }}
                                                onClick={this.props.invokeContinuation}
                                            >
                                            TimePoint {index}
                                            </Button>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    ) : ( 
                    <div className="markdown-container">  
                        <ReactMarkdown
                        source={markdown}
                        escapeHtml={false}
                        />
                    </div>
                    )
                }
            </div>
        )
    }
}

export default Output;

