import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import { Button, TextField } from '@material-ui/core'
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    // leftIcon: {
    //   marginRight: theme.spacing.unit,
    // },
    rightIcon: {
      marginLeft: theme.spacing.unit,
    },
    // iconSmall: {
    //   fontSize: 20,
    // },
  });
class Output extends Component {

    state = {
        timePointValues: {},
    }



    render(){
        const markdown = require('../markdown');
        const { classes } = this.props;
        const timePointValues = this.props.timePointValues
        return (
            <div>
                {
                    this.props.snapshots.length !== 0 ?
                    (
                        <div className="output-container">
                            <div className="container-inputs">
                                <h2>Watched Variables</h2>
                                <hr></hr>
                                {
                                    this.props.dependencies.map((dependency) => {
                                        return (<div key={dependency.name}>
                                                <TextField
                                                    id="standard-name"
                                                    label={dependency.name}
                                                    id={`input-${dependency.name}`}
                                                    // defaultValue={}
                                                    // value={}
                                                    // onChange={this.handleChange('name')}
                                                    margin="normal"
                                                    style={{    
                                                        margin: '5px',
                                                    }}
                                                />
                                                {timePointValues[dependency.name]}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="container-buttons">
                                <div 
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <h2 
                                    style={{
                                        display: 'inline',
                                    }}>
                                        Time Points
                                    </h2> 
                                    <div 
                                        style={{
                                            display: 'inline',
                                        }}
                                    >
                                        <Button 
                                            variant="contained"
                                            color="secondary"
                                            size="small"
                                            style={{
                                                margin: '20px',
                                            }}
                                            onClick={this.props.invokeContinuation}
                                        >
                                            Resume
                                            <Icon className={classes.rightIcon}>play_circle_filled</Icon>
                                        </Button>
                                    </div>         
                                </div>
                                <hr></hr>
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
                                                // onClick={this.props.invokeContinuation}
                                                onClick={this.props.selectTimePoint}
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

Output.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Output);

