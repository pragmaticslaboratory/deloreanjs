const DeclaratorVisitor = require('./visitors/declarator');
const AssignmentVisitor = require('./visitors/assignment');
const InitConfigVisitor = require('./visitors/config');

const { addDependecies } = require('./heap')
const variables = require('../observables');

function debug(list) {
    obj = [];
    for (let key in list) {
        obj.push(key); 
    }
    return obj;
}

global.deb;

const DependeciesVisitor = {
    Program(path) {
        deb = debug(variables);
        path.traverse(DeclaratorVisitor);
        path.traverse(AssignmentVisitor);
        addDependecies(deb);
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

