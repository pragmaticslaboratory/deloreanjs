import React from 'react';

export default function Line(props) {
  const { start, end } = props;

  return (
    <div
      style={{
        marginLeft: `${start}em`,
        width: `${end}em`,
        height: '0.5em',
        zIndex: '-1',
        position: 'absolute',
        top: '0.8em',
        left: '0.5em',
        backgroundColor: '#6cd0e5',
      }}></div>
  );
}
