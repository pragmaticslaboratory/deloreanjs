const WatchVisitor = require('./visitors/watch')
const DeclaratorVisitor = require('./visitors/declarator');
const AssignmentVisitor = require('./visitors/assignment');
const ContinuationsConfigVisitor = require('./visitors/createContinuation');
const StoreContinuationsVisitor = require('./visitors/storeContinuations');
const RestoreHeapVisitor = require('./visitors/heapRestore');
const RestoreContinuationVisitor = require('./visitors/continuationRestore')
const TryCatchVisitor = require('./visitors/tryCatch')

const { addDependencies } = require('./heap')

global.dependencies = [];

const DependenciesVisitor = {
    Program(path) {
        dependencies = [];
        path.traverse(WatchVisitor);
        path.traverse(DeclaratorVisitor);
        path.traverse(AssignmentVisitor);
        addDependencies(dependencies);
        console.log(dependencies)
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
    }
}

