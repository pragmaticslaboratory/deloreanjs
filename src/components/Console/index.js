import React, { Component } from 'react';
import { Hook, Console, Decode } from 'console-feed';
import './styles.css';

class ConsoleContainer extends Component {
  state = {
    logs: [],
  };

  componentDidMount() {
    Hook(window.console, (log) => {
      this.setState(({ logs }) => ({ logs: [...logs, Decode(log)] }));
    });
  }

  render() {
    return (
      <div className="consolefeed-container">
        <p>delorean v1.1.0.-</p>
        <div>
          <Console
            logs={this.state.logs}
            filter={[
              'log',
              'debug',
              'info',
              'error',
              'table',
              'clear',
              'time',
              'timeEnd',
              'count',
              'assert',
            ]}
            variant="dark"
          />
        </div>
      </div>
    );
  }
}

export default ConsoleContainer;
