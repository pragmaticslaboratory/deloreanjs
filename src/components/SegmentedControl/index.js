import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function SegmentedControl(props) {
  const { value, title, onChange, options } = props;
  const [first, second] = options;

  const [translateValue, setTranslateValue] = useState('0%');

  useEffect(() => {
    const initialValue = options.map((option) => option.label).indexOf(value);
    if (initialValue === 1) {
      setTranslateValue('100%');
    } else {
      setTranslateValue('0%');
    }
  }, []);

  const styles = {
    transform: `translate(${translateValue})`,
  };

  const setValue = (value) => {
    onChange(value.label);
  };

  useEffect(() => {
    setTranslateValue(value === first.label ? '0%' : '100%');
  }, [value]);

  return (
    <div>
      <h3 className="segmented-control-title">{title}</h3>
      <div className="segmented-control-container">
        <div className="segmented-control-option-container" onClick={() => setValue(first)}>
          <span
            className={`segmented-control-option-text ${
              translateValue === '0%' && 'swtich-options selected-switch'
            }`}>
            {first.label}
          </span>
        </div>
        <div className="segmented-control-option-container" onClick={() => setValue(second)}>
          <span
            className={`segmented-control-option-text ${
              translateValue === '100%' && 'swtich-options selected-switch'
            }`}>
            {second.label}
          </span>
        </div>
      </div>
      <span className="segmented-control-selected" style={styles} />
    </div>
  );
}

SegmentedControl.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  title: PropTypes.string,
};

SegmentedControl.defaultProps = {
  title: '',
};
