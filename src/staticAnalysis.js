const WatchVisitor = require('./visitors/watch')
const DeclaratorVisitor = require('./visitors/declarator');
const AssignmentVisitor = require('./visitors/assignment');
const ContinuationsConfigVisitor = require('./visitors/createContinuation');
const StoreContinuationsVisitor = require('./visitors/storeContinuations');
const RestoreHeapVisitor = require('./visitors/heapRestore');
const RestoreContinuationVisitor = require('./visitors/continuationRestore')
const TryCatchVisitor = require('./visitors/tryCatch')
const LoopVisitor = require('./visitors/loop')
const IfBlockVisitor = require('./visitors/ifBlock')
const HeapRestoreVisitor = require('./visitors/heapRestore')

const { addDependencies } = require('./heap')

global.dependencies = [];

const DependenciesVisitor = {
    Program(path) {
        dependencies = [];
        path.traverse(WatchVisitor);
        path.traverse(DeclaratorVisitor);
        path.traverse(AssignmentVisitor);
        path.traverse(LoopVisitor);
        addDependencies(dependencies);
    }
};

module.exports = {
    dependenciesVisitor: () => {
        return ({
            visitor: DependenciesVisitor,
        })
    },

    initConfigVisitor: () => {
        return ({
            visitor: ContinuationsConfigVisitor,
        })
    },

    storeContinuationsVisitor: () => {
        return ({
            visitor: StoreContinuationsVisitor,
        })
    },

    restoreHeapVisitor: () => {
        return ({
            visitor: RestoreHeapVisitor,
        })
    },

    restoreContinuationVisitor: () => {
        return ({
            visitor: RestoreContinuationVisitor,
        })
    },

    tryCatchVisitor: () => {
        return ({
            visitor: TryCatchVisitor,
        })
    },

    ifBlockVisitor: () => {
        return ({
            visitor: IfBlockVisitor,
        })
    },

    heapRestoreVisitor: () => {
        return ({
            visitor: HeapRestoreVisitor,
        })
    },
}

