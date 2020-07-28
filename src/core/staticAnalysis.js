const {
  dependencyVisitor,
  implicitTimepointVisitor,
  storeContinuationVisitor,
  continuationFactoryVisitor,
  ifBlockVisitor,
  tryCatchVisitor,
  throwBreakVisitor,
  timepointLineVisitor,
  restoreHeapVisitor,
} = require('./static-analysis');

global.dependencies = [];

module.exports = {
  dependenciesVisitor: dependencyVisitor,
  implicitTPVisitor: implicitTimepointVisitor,
  initConfigVisitor: continuationFactoryVisitor,
  storeContinuationsVisitor: storeContinuationVisitor,
  locVisitor: timepointLineVisitor,
  heapRestoreVisitor: restoreHeapVisitor,
  tryCatchVisitor,
  ifBlockVisitor,
  throwBreakVisitor,
};
