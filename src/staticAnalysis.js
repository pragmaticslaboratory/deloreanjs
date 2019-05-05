const DeclaratorVisitor = require('./visitors/declarator');
const AssignmentVisitor = require('./visitors/assignment');
const ContinuationsConfigVisitor = require('./visitors/createContinuation');
const StoreContinuationsVisitor = require('./visitors/storeContinuations');
const RestoreHeapVisitor = require('./visitors/heapRestore');
const RestoreContinuationVisitor = require('./visitors/continuationRestore')
const TryCatchVisitor = require('./visitors/tryCatch')

const { addDependecies } = require('./heap')
const variables = require('../observables');

function observe(list) {
    obj = [];
    for (let key in list) {
        obj.push(key); 
    }
    return obj;
}

global.dependencies;

const DependeciesVisitor = {
    Program(path) {
        dependencies = observe(variables);
        path.traverse(DeclaratorVisitor);
        path.traverse(AssignmentVisitor);
        addDependecies(dependencies);
    }
};

module.exports = {
    dependeciesVisitor: () => {
        return ({
            visitor: DependeciesVisitor,
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

