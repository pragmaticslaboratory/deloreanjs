const dependecyVisitor = require('./static-analysis/visitors/dependencies');

const ContinuationsConfigVisitor = require('./static-analysis/visitors/continuation/continuation-factory.visitor');
const StoreContinuationsVisitor = require('./static-analysis/visitors/continuation/store-continuation.visitor');
const RestoreHeapVisitor = require('./static-analysis/visitors/heap/restore-heap.visitor');
const RestoreContinuationVisitor = require('./static-analysis/visitors/continuation/restore-continuation.visitor');
const TryCatchVisitor = require('./static-analysis/visitors/common/try-catch.visitor');

const IfBlockVisitor = require('./static-analysis/visitors/common/if-block.visitor');
const HeapRestoreVisitor = require('./static-analysis/visitors/heap/restore-heap.visitor');
const ThrowBreakVisitor = require('./static-analysis/visitors/breakpoint/throw-break.visitor');

const ImplicitDeclaratorVisitor = require('./static-analysis/visitors/implicit-timepoint/declarator.visitor');
const ImplicitAssignmentVisitor = require('./static-analysis/visitors/implicit-timepoint/assignment.visitor');
const ImplicitPropertyVisitor = require('./static-analysis/visitors/implicit-timepoint/property.visitor');
const ImplicitUnaryVisitor = require('./static-analysis/visitors/implicit-timepoint/unary.visitor');
const ImplicitUpdateVisitor = require('./static-analysis/visitors/implicit-timepoint/update.visitor');
const LocVisitor = require('./static-analysis/visitors/common/timepoint-line.visitor');

const { addDependencies } = require('./heap');

global.dependencies = [];

const ImplicitTPVisitor = {
  Program(path) {
    path.traverse(ImplicitDeclaratorVisitor);
    path.traverse(ImplicitAssignmentVisitor);
    path.traverse(ImplicitPropertyVisitor);
    path.traverse(ImplicitUnaryVisitor);
    path.traverse(ImplicitUpdateVisitor);
  },
};

module.exports = {
  dependenciesVisitor: dependecyVisitor,

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

  implicitTPVisitor: () => {
    return {
      visitor: ImplicitTPVisitor,
    };
  },

  locVisitor: () => {
    return {
      visitor: LocVisitor,
    };
  },
};
