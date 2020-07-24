import React, { useState, useCallback } from 'react';

import PropTypes from 'prop-types';

import './styles.css';

export default function SegmentedControl(props) {
  const { value, title, options } = props;
  const [first, second] = options;

  const [translateValue, setTranslateValue] = useState('0%');

  const styles = {
    transform: `translate(${translateValue})`,
  };

  const setValue = (value) => {
    alert(value);
  };

  return (
    <div>
      <h3 className="segmented-control-title">{title}</h3>
      <div className="segmented-control-container">
        <div className="segmented-control-option-container" onClick={() => setTranslateValue(`0%`)}>
          <span className="segmented-control-option-text">{first.label}</span>
        </div>
        <div
          className="segmented-control-option-container"
          onClick={() => setTranslateValue(`100%`)}>
          <span className="segmented-control-option-text">{second.label}</span>
        </div>
      </div>
      <span className="segmented-control-selected" style={styles} />
    </div>
  );
}

SegmentedControl.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  title: PropTypes.string,
};

SegmentedControl.defaultProps = {
  title: '',
};
