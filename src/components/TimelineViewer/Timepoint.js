import React, { useState } from 'react';
import './Timepoint.css';

export default function Timepoint(props) {
  const {
    timepoints,
    enable,
    isSelected,
    selectCurrentTimepoint,
    selectedTimepoint,
    timelineIdx,
    timelineList,
  } = props;
  const [isSelecting, setIsSelecting] = useState(false);

  // const isEnable = (timepoint) => {
  //   let isItFromThePast;
  //   let idPoint = timepoint.timePointId;
  //   let linePoint = timepoint.timeLineId;

  //   console.log({
  //     log: 'isEnable?',
  //     name: idPoint,
  //     timeline_tp: linePoint,
  //   });

  //   // Primera ejecucion todos los timepoints estan habilitados
  //   if (timelineIdx === linePoint && timelineIdx === 0) return true;

  //   // Deshabilita el timepoint que se utilizo
  //   if (timelineIdx != linePoint) return false;

  //   if (timelineIdx === linePoint) {
  //     isItFromThePast = timelineList.map((snapshots, index) => {
  //       let samePoint = snapshots.filter((el) => el.timePointId === idPoint);

  //       if (samePoint[0]) {
  //         console.log({
  //           timepoint,
  //           samePoint: samePoint[0],
  //           index,
  //         });
  //       }

  //       if (
  //         samePoint[0] &&
  //         samePoint[0].timeLineId !== index &&
  //         samePoint[0].timePointId !== selectedTimepoint
  //       ) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     });
  //   }

  //   return !isItFromThePast.includes(true);
  // };

  const timepointSelection = () => {
    return (
      <div className="tp-selection-container">
        <div className="tp-selection-close-btn" onClick={toggleTimepointSelection}>
          <span className="material-icons">close</span>
        </div>
        <p className="tp-selection-title">
          <b>Select a timepoint</b>
        </p>
      </div>
    );
  };

  const toggleTimepointSelection = () => {
    setIsSelecting(!isSelecting);
  };

  return (
    <div className="timepoint-container">
      {isSelecting && timepointSelection()}
      <div
        onClick={toggleTimepointSelection}
        className={`timepoint ${!enable && 'disable-timepoint'} ${
          isSelected && enable && 'selected-timepoint'
        }`}>
        <span className="material-icons">room</span>
      </div>

      <div
        style={{
          position: 'absolute',
          left: '50%',
        }}>
        <section
          className="group-timepoint-details-container"
          style={{
            display: `${isSelecting ? 'flex' : 'none'}`,
          }}>
          {timepoints.map((timepoint, index) => {
            const { timePointId, timePointLoc, timePointTimestamp } = timepoint;
            let isSelectedTimepoint = selectedTimepoint == timePointId ? true : false;
            // let isTimepointEnable = isEnable(timepoint);

            // console.log({
            //   log: 'render',
            //   isTimepointEnable,
            // });

            return (
              <div
                key={index}
                className={`timepoint-details-container
                  ${isSelectedTimepoint && 'tp-details-container-selected'}
                `}
                onClick={() => selectCurrentTimepoint(timepoint)}>
                <h3 className="timepoint-title">{timePointId}</h3>
                <p className="timepoint-loc">Line: {timePointLoc}</p>
                <div className="timepoint-footer">
                  <p className="timepoint-enable">
                    <b>{enable ? 'Enable' : 'Disable'}</b>
                  </p>
                  <p className="timepoint-timestamp">{timePointTimestamp} ms</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
