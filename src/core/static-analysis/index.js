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
} = require('./visitors');

global.dependencies = [];

/* todo: refactor debugger (all code transformation functionality will be here) */

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
