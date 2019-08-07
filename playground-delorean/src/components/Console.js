import React, { Component } from 'react'
import { Hook, Console, Decode } from 'console-feed'

class ConsoleContainer extends Component {
  state = {
    logs: []
  }

  componentDidMount() {
    Hook(window.console, log => {
      this.setState(({ logs }) => ({ logs: [...logs, Decode(log)] }))
    })
  }

  render() {
    return (
      <div className="consolefeed-container" style={{ backgroundColor: '#242424', borderRight: '1px solid rgb(17, 21, 24)', borderTop: '1px solid rgb(17, 21, 24)' }}>
        <div className="title-container">
          <div className="title">
            <p>Console</p>
          </div>
        </div>
        <div>
          <Console 
            logs={this.state.logs}
            filter= {[
              'log',
              'debug',
              'info',
              'error',
              'table',
              'clear',
              'time',
              'timeEnd',
              'count',
              'assert'
            ]}
            variant='dark'
          />
        </div>
      </div>
    )
  }
}

export default ConsoleContainer;