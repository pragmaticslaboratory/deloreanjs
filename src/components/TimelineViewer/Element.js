import React from 'react';
import './Element.css';

export default function Element(props) {
  const { title, classNames, marginLeft } = props;
  return (
    <div className={classNames} style={{ marginLeft: marginLeft + 'em' }}>
      <span>{title}</span>
    </div>
  );
}
