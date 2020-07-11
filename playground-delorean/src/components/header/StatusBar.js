import React, { Component } from 'react';
import './StatusBar.css';

class StatusBar extends Component {
  render() {
    return (
      <div className="status-bar">
        <p style={{ paddingLeft: 20 }}>DeloreanJS</p>
        <div className="buttons-bar">
          <a style={{ textDecoration: 'none' }} href="https://github.com/fruizrob/deloreanjs">
            <div className="github-button">
              <img
                alt="github logo"
                className="icon-button-bar"
                src="https://diversity.github.com/assets/svg/mark-github.svg"></img>
              GitHub
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default StatusBar;
