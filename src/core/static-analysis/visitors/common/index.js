import ifBlockVisitor from './if-block.visitor';
import restoreHeapVisitor from './restore-heap.visitor';
import throwBreakVisitor from './throw-break.visitor';
import timepointLineVisitor from './timepoint-line.visitor';
import tryCatchVisitor from './try-catch.visitor';
import watchVisitor from './watch.visitor';

const ifBlock = () => {
  return {
    visitor: ifBlockVisitor,
  };
};

const restoreHeap = () => {
  return {
    visitor: restoreHeapVisitor,
  };
};

const throwBreak = () => {
  return {
    visitor: throwBreakVisitor,
  };
};

const timepointLine = () => {
  return {
    visitor: timepointLineVisitor,
  };
};

const tryCatch = () => {
  return {
    visitor: tryCatchVisitor,
  };
};

const watch = () => {
  return {
    visitor: watchVisitor,
  };
};

export { ifBlock, restoreHeap, throwBreak, timepointLine, tryCatch, watch };
