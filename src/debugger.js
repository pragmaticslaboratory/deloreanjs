const DeclaratorVisitor = require('./visitors/declarator')
const AssignmentVisitor = require('./visitors/assignment')

function debug(list) {
    obj = {}
    list.map(i => {
        obj[i] = []
    })
    return obj
}

let variables = ["a", "c", "x"]
global.deb;

const WrapperVisitor = {
    Program(path) {
        deb = debug(variables)
        path.traverse(DeclaratorVisitor)
        path.traverse(AssignmentVisitor)
        console.log(deb)
    }
}

module.exports = function () {
    return {
        visitor: WrapperVisitor
    }
}

