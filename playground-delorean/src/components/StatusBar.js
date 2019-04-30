import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tab from './Tab'

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    leftIcon: {
      marginRight: theme.spacing.unit,
    },
    rightIcon: {
      marginLeft: theme.spacing.unit,
    },
    iconSmall: {
      fontSize: 20,
    },
  });

class StatusBar extends Component {
    render(){
        const { classes } = this.props;
        return(
            <div className="status-bar">
                <div className="tabs-container">
                    {
                        this.props.tabs.map((tab) => {
                            return (
                            <Tab
                                key={tab.name}
                                name={tab.name}
                                input={tab.input}
                                selectTab={this.props.selectTab}
                            />
                            )
                        })
                    }
                </div>
                <h3>Delorean</h3>
                {
                    !this.props.isRunning ? 

                    <Button variant="contained" color="primary" className={classes.button} onClick={this.props.executeCode}>
                        RUN!
                        <Icon className={classes.rightIcon}>play_circle_filled</Icon>
                    </Button> : 
                    <Button variant="contained" color="primary" className={classes.button} onClick={this.props.stopExecution}>
                        STOP!
                        <Icon className={classes.rightIcon}>stop</Icon>
                    </Button>
                }
            </div>
        )
    }
}

StatusBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(StatusBar);