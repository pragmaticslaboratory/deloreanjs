import React from 'react';
import { TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';
import deleteIcon from '../../../public/assets/delete.png';

import './styles.css';

const Watch = (props) => {
  const { watchVariables } = props.appStore.state;

  return (
    <div className="input-variables-container">
      <div className="watch-variables-bar">
        <div className="watch-variables-title">
          <p>Watch Variables</p>
        </div>
      </div>

      <div className="watch-variables-content">
        <div className="watch-variable-input-container">
          <TextField
            size="small"
            variant="outlined"
            label="Name of the variable"
            id="watch-variable-input"></TextField>
          <IconButton size="small" onClick={props.appStore.addVariable}>
            <AddCircle size="small"></AddCircle>
          </IconButton>
        </div>
        {watchVariables.map((variable) => {
          return (
            <div className="watch-variable" key={variable}>
              <p>{variable}</p>
              <img
                onClick={() => props.appStore.deleteWatchVariable(variable)}
                style={{ marginLeft: '8px' }}
                alt="expand icon"
                src={deleteIcon}
                height="18"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Watch;
