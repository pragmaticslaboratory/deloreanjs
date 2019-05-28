import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { Button, TextField } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    // margin: "20px",
  },
  buttonSelected: {
      backgroundColor: red,
  },
  // leftIcon: {
  //   marginRight: theme.spacing.unit,
  // },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
  // iconSmall: {
  //   fontSize: 20,
  // },

});
class Output extends Component {
  state = {
    timePointValues: {}
  };

  render() {
    const markdown = require("../markdown");
    const { classes } = this.props;
    const timePointValues = this.props.timePointValues;
    return (
      <div>
        {this.props.snapshots.length !== 0 ? (
          <div className="output-container">
            <div className="container-buttons">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                <h2
                  style={{
                    display: "inline"
                  }}
                >
                  Time Points
                </h2>
                <div
                  style={{
                    display: "inline"
                  }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    className={classes.button}
                    onClick={this.props.invokeContinuation}
                  >
                    Resume
                    <Icon className={classes.rightIcon}>
                      play_circle_filled
                    </Icon>
                  </Button>
                </div>
              </div>
              <hr />
              {this.props.snapshots.map(snapshot => {
                return (
                  <Button
                    kont={snapshot.timePointId}
                    id={snapshot.timePointId}
                    key={snapshot.timePointId}
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    onClick={this.props.selectTimePoint}
                  >
                    TimePoint {snapshot.timePointId}
                  </Button>
                );
              })}
            </div>
            <div className="container-inputs">
              <h2>Watched Variables</h2>
              <hr />
              {this.props.dependencies.map(dependency => {
                return (
                  <div key={dependency.name} style={{
                    display: "flex",
                    alignItems: "center",
                  }}>
                    <TextField
                      label={dependency.name}
                      id={`input-${dependency.name}`}
                      margin="normal"
                      style={{
                        margin: "5px"
                      }}
                    />
                    <div style={{
                      display: "inline",
                    }}>
                      {
                        (dependency.type != 'loop') ? (timePointValues[dependency.name]) ? <p>Current value: {timePointValues[dependency.name]}</p> : <p>Current value: undefined</p> : (timePointValues[dependency.name]) ? <p>Current value (loop): {timePointValues[dependency.name]}</p> : <p>Current value (loop): undefined</p>
                      }
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="markdown-container">
            <ReactMarkdown source={markdown} escapeHtml={false} />
          </div>
        )}
      </div>
    );
  }
}

Output.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Output);
