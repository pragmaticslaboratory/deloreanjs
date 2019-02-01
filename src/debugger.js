const DeclaratorVisitor = require('./visitors/declarator');
const AssignmentVisitor = require('./visitors/assignment');
const InitConfigVisitor = require('./visitors/config');

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
            visitor: InitConfigVisitor,
        })
    }
}

