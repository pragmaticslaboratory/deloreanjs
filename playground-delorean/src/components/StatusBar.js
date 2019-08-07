import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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
                <div className="buttons-bar">
                  <a style={{textDecoration: "none"}} href="https://github.com/fruizrob/deloreanjs">
                    <div className="github-button">
                      <img className="icon-button-bar" src="https://diversity.github.com/assets/svg/mark-github.svg"></img>
                      GitHub
                    </div>
                  </a>
                </div>
                <p>DeloreanJS</p>
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