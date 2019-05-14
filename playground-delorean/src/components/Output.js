import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import { Button, TextField } from '@material-ui/core'

class Output extends Component {

    render(){
        const markdown = require('../markdown');
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
                                        return (<div key={dependency}>
                                                <TextField
                                                    id="standard-name"
                                                    label={dependency}
                                                    id={`input-${dependency}`}
                                                    defaultValue={window[dependency]}
                                                    // value={}
                                                    // onChange={this.handleChange('name')}
                                                    margin="normal"
                                                    style={{    
                                                        margin: '5px',
                                                    }}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="container-buttons">
                                <h2>Time Points</h2>            
                                {
                                    this.props.snapshots.map((snapshot) => {
                                        return (
                                            <Button 
                                                kont={snapshot.TimePointId} 
                                                id={snapshot.TimePointId}
                                                key={snapshot.TimePointId}
                                                variant="contained" 
                                                color="primary"
                                                size="small"
                                                style={{
                                                    margin:'5px'
                                                }}
                                                onClick={this.props.invokeContinuation}
                                            >
                                            TimePoint {snapshot.TimePointId}
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

