const {
  dependencyVisitor,
  implicitTimepointVisitor,
  storeContinuationVisitor,
  continuationFactoryVisitor,
} = require('./static-analysis');

const RestoreContinuationVisitor = require('./static-analysis/visitors/continuation/restore-continuation.visitor');
const RestoreHeapVisitor = require('./static-analysis/visitors/common/restore-heap.visitor');
const HeapRestoreVisitor = require('./static-analysis/visitors/common/restore-heap.visitor');

const IfBlockVisitor = require('./static-analysis/visitors/common/if-block.visitor');
const TryCatchVisitor = require('./static-analysis/visitors/common/try-catch.visitor');
const ThrowBreakVisitor = require('./static-analysis/visitors/common/throw-break.visitor');

const LocVisitor = require('./static-analysis/visitors/common/timepoint-line.visitor');

global.dependencies = [];

module.exports = {
  dependenciesVisitor: dependencyVisitor,
  implicitTPVisitor: implicitTimepointVisitor,
  initConfigVisitor: continuationFactoryVisitor,
  storeContinuationsVisitor: storeContinuationVisitor,

  restoreHeapVisitor: () => {
    return {
      visitor: RestoreHeapVisitor,
    };
  },

  restoreContinuationVisitor: () => {
    return {
      visitor: RestoreContinuationVisitor,
    };
  },

  tryCatchVisitor: () => {
    return {
      visitor: TryCatchVisitor,
    };
  },

  ifBlockVisitor: () => {
    return {
      visitor: IfBlockVisitor,
    };
  },

  heapRestoreVisitor: () => {
    return {
      visitor: HeapRestoreVisitor,
    };
  },

  throwBreakVisitor: () => {
    return {
      visitor: ThrowBreakVisitor,
    };
  },

  locVisitor: () => {
    return {
      visitor: LocVisitor,
    };
  },
};
