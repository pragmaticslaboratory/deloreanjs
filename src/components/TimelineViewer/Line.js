import React from 'react';

export default function Line(props) {
  const { start, end, type, selectedTimepointLine } = props;

  if (type == 'horizontal') {
    return (
      <div
        style={{
          marginLeft: `${start > 1 ? start * 5 + 2 : start}em`,
          width: `${end * 5}em`,
          height: '0.5em',
          zIndex: '-1',
          position: 'absolute',
          top: '0.8em',
          left: '0.5em',
          backgroundColor: '#6cd0e5',
        }}></div>
    );
  } else if (type == 'vertial') {
    let end = selectedTimepointLine;
    return (
      <div
        style={{
          marginLeft: `${start > 1 ? start * 5 + 2 : start}em`,
          width: '0.5em',
          height: `${end * 7}em`,
          zIndex: '-1',
          position: 'absolute',
          top: `-${end * 7}em`,
          left: '0.25em',
          backgroundColor: '#6cd0e5',
        }}></div>
    );
  }
}
