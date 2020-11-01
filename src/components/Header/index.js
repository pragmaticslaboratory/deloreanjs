import React from 'react';
import DeloreanLogo from '../../assets/img/delorean-logo.png';
import './styles.css';

function StatusBar(props) {
  return (
    <div className="status-bar">
      <div className="flex-row">
        <img src={DeloreanLogo} alt="DeloreanJS" className="status-bar-logo" />
        <h1 className="status-bar-title">DeloreanJS</h1>
      </div>
      <div className="buttons-bar">
        <div
          onClick={() => props.intro.start()}
          style={{ marginRight: '1em' }}
          className="flex-row github-button button">
          <h3 className="status-bar-github-text">Tutorial</h3>
        </div>
        <a
          style={{ textDecoration: 'none' }}
          href="https://github.com/fruizrob/deloreanjs"
          rel="noreferrer"
          target="_blank"
          rel="noopener noreferrer">
          <div className="flex-row github-button button">
            <img
              alt="GitHub"
              className="status-bar-github-icon"
              src="https://diversity.github.com/assets/svg/mark-github.svg"></img>
            <h3 className="status-bar-github-text">View on GitHub</h3>
          </div>
        </a>
      </div>
    </div>
  );
}

export default StatusBar;
