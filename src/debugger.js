const DeclaratorVisitor = require('./visitors/declarator');
const AssignmentVisitor = require('./visitors/assignment');

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

const WrapperVisitor = {
    Program(path) {
        deb = debug(variables);
        path.traverse(DeclaratorVisitor);
        path.traverse(AssignmentVisitor);
        addDependecies(deb);
    }
};

module.exports = function () {
    return {
        visitor: WrapperVisitor
    };
}

