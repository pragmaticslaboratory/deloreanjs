const WatchVisitor = require('./visitors/watch');
const DeclaratorVisitor = require('./visitors/declarator');
const AssignmentVisitor = require('./visitors/assignment');
const ContinuationsConfigVisitor = require('./visitors/createContinuation');
const StoreContinuationsVisitor = require('./visitors/storeContinuations');
const RestoreHeapVisitor = require('./visitors/heapRestore');
const RestoreContinuationVisitor = require('./visitors/continuationRestore');
const TryCatchVisitor = require('./visitors/tryCatch');
const LoopVisitor = require('./visitors/loop');
const IfBlockVisitor = require('./visitors/ifBlock');
const HeapRestoreVisitor = require('./visitors/heapRestore');
const ThrowBreakVisitor = require('./visitors/throwBreak');
const PropertyVisitor = require('./visitors/property');
const ImplicitDeclaratorVisitor = require('./visitors/implicitTPVisitors/declarator');
const ImplicitAssignmentVisitor = require('./visitors/implicitTPVisitors/assignment');
const ImplicitPropertyVisitor = require('./visitors/implicitTPVisitors/property');
const ImplicitUnaryVisitor = require('./visitors/implicitTPVisitors/unary');
const ImplicitUpdateVisitor = require('./visitors/implicitTPVisitors/update');
const LocVisitor = require('./visitors/loc');

const { addDependencies } = require('./heap');

global.dependencies = [];

const DependenciesVisitor = {
  Program(path) {
    let pastDependencies;
    path.traverse(WatchVisitor);

    do {
      pastDependencies = global.dependencies.length;
      path.traverse(DeclaratorVisitor);
      path.traverse(AssignmentVisitor);
      path.traverse(LoopVisitor);
      path.traverse(PropertyVisitor);
    } while (pastDependencies < global.dependencies.length);
    addDependencies(global.dependencies);
  },
};

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
  dependenciesVisitor: () => {
    return {
      visitor: DependenciesVisitor,
    };
  },

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
