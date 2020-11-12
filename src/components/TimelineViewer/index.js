import React, { useEffect, useCallback, useState } from 'react';
import SimpleBar from 'simplebar-react';
import TimepointList from '../TimepointList';
import Timepoint from './Timepoint';
import Timestamps from './Timestamps';
import Element from './Element';
import Line from './Line';
import './styles.css';

export default function Timeline(props) {
  const { store, getEndTimes } = props;
  let time = getEndTimes();
  const { state, getTimepointById } = store;
  const { snapshots, selectedTimePoint, selectedTimePointLine } = state;
  const [timelineList, setTimelineList] = useState([]);
  const [endTimesList, setEndTimesList] = useState([]);
  const [lastMsList, setLastMsList] = useState([0]);
  const [lineBreaks, setLineBreaks] = useState([0]);
  let timepoint = getTimepointById(selectedTimePoint);

  useEffect(() => {
    if (Boolean(snapshots.length)) {
      let timeline = [...snapshots];
      setTimelineList((timelineList) => [...timelineList, timeline]);

      let endTime = getEndTimes() + 1;
      if (Boolean(selectedTimePoint)) {
        endTime += timepoint.timePointTimestamp;
        /* calcula el salto de linea que debe hacer hacia abajo (vertical line) */
        // console.log({ actualLine: timepoint.timeLineId, lineOfTimepoint: selectedTimePointLine });
        let lastMs = timepoint.timePointTimestamp;
        let lineBreak = timepoint.timeLineId - selectedTimePointLine;

        setLastMsList((lastMsList) => [...lastMsList, lastMs]);
        setLineBreaks((lineBreaks) => [...lineBreaks, lineBreak]);
      }

      setEndTimesList((endTimesList) => [...endTimesList, endTime]);
    } else {
      setTimelineList([]);
      setEndTimesList([]);
      setLastMsList([0]);
      setLineBreaks([0]);
    }
  }, [time, snapshots.length, snapshots]);

  const renderTimeline = useCallback(
    (snapshots, timelineIdx) => {
      let endTime = endTimesList[timelineIdx];
      let lastMs = lastMsList[timelineIdx];

      function isEnable(timepoints, timelineIdx) {
        let idPoint = timepoints[0].timePointId;
        let linePoint = timepoints[0].timeLineId;

        if (timelineIdx === linePoint && timelineIdx === 0) return true;
        if (timelineIdx != linePoint) return false;

        if (timelineIdx === linePoint) {
          timelineList.map((snapshots, index) => {
            console.log({
              timelineIdx,
              linePoint,
              idPoint,
              index,
              enable: Boolean(linePoint === index),
            });
            let samePoint = snapshots.filter((el) => el.timePointId === idPoint);

            if (samePoint[0] && samePoint.linePoint === index) {
              return true;
            }
          });
        }
        return false;
      }

      return (
        <section key={timelineIdx} className="timeline-container">
          {timelineIdx === 0 && <Element title="Start" classNames="timeline-start-container" />}

          {Array.apply(null, Array(Math.max(...endTimesList) + 20)).map((_, index) => {
            if (index === 0 && timelineIdx === 0) return;
            let timepoints = snapshots.filter((snapshot) => snapshot.timePointTimestamp === index);

            if (index < lastMs) return <div key={index} className="timeline-empty-space"></div>;

            if (timepoints.length > 0) {
              let isSelected = timepoints.map((el) => el.timePointId === selectedTimePoint);
              return (
                <Timepoint
                  isSelected={isSelected.includes(true)}
                  key={index}
                  timepoints={timepoints}
                  enable={isEnable(timepoints, timelineIdx)}
                />
              );
            } else if (endTime === index) {
              return (
                <Element
                  key={index}
                  title="End"
                  classNames="timeline-start-container timeline-end-container"
                />
              );
            } else {
              return <div key={index} className="timeline-empty-space"></div>;
            }
          })}

          <Line
            type="horizontal"
            start={timelineIdx === 0 ? 1 : lastMs}
            end={endTimesList[timelineIdx] - (timelineIdx === 0 ? 0 : lastMs)}
          />
          {timelineIdx != 0 && (
            <Line
              type="vertial"
              start={timelineIdx === 0 ? 1 : lastMs}
              timelineIdx={timelineIdx}
              selectedTimepointLine={lineBreaks[timelineIdx]}
            />
          )}
        </section>
      );
    },
    [timelineList, selectedTimePoint],
  );

  return (
    <section className="timeline-viewer-container">
      <TimepointList store={store} />
      <div className="timeline-viewer">
        {Boolean(timelineList.length) ? (
          <div className="timeline-list-container">
            <SimpleBar style={{ height: '100%' }}>
              <Timestamps endTime={Math.max(...endTimesList) + 20} />
              {timelineList.map(renderTimeline)}
            </SimpleBar>
          </div>
        ) : (
          <div className="timeline-viewer-without-timelines">
            <span>Run the code to start tracking timepoints</span>
          </div>
        )}
      </div>
    </section>
  );
}
