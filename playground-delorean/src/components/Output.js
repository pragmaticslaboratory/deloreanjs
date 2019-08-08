import React, { Component } from "react";
import State from './State';
import Timepoints from './Timepoints';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import './Output.css'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  buttonSelected: {
      backgroundColor: red,
  },

  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});
class Output extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
          <div className="delorean-container">
            <Timepoints
              snapshots={this.props.snapshots}
              selectTimePoint={this.props.selectTimePoint}
              classes={classes}
            />
            <State 
              selectedTimePoint={this.props.selectedTimePoint}
              dependencies={this.props.dependencies}
              timePointValues={this.props.timePointValues}
              isRunning={this.props.isRunning}
              invokeContinuation={this.props.invokeContinuation}
            />
          </div> 
      </div>
    );
  }
}

Output.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Output);
