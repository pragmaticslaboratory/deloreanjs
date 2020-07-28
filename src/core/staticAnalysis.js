const { dependencyVisitor, implicitTimepointVisitor } = require('./static-analysis');

const ContinuationsConfigVisitor = require('./static-analysis/visitors/continuation/continuation-factory.visitor');
const StoreContinuationsVisitor = require('./static-analysis/visitors/continuation/store-continuation.visitor');
const RestoreHeapVisitor = require('./static-analysis/visitors/heap/restore-heap.visitor');
const RestoreContinuationVisitor = require('./static-analysis/visitors/continuation/restore-continuation.visitor');
const TryCatchVisitor = require('./static-analysis/visitors/common/try-catch.visitor');

const IfBlockVisitor = require('./static-analysis/visitors/common/if-block.visitor');
const HeapRestoreVisitor = require('./static-analysis/visitors/heap/restore-heap.visitor');
const ThrowBreakVisitor = require('./static-analysis/visitors/breakpoint/throw-break.visitor');

const LocVisitor = require('./static-analysis/visitors/common/timepoint-line.visitor');

const { addDependencies } = require('./heap');

global.dependencies = [];

module.exports = {
  dependenciesVisitor: dependencyVisitor,
  implicitTPVisitor: implicitTimepointVisitor,

  initConfigVisitor: () => {
    return {
      visitor: ContinuationsConfigVisitor,
    };
  },

  storeContinuationsVisitor: () => {
    return {
      visitor: StoreContinuationsVisitor,
    };
  },

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
