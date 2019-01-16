const DeclaratorVisitor = require('./visitors/declarator')
const AssignmentVisitor = require('./visitors/assignment')

function debugg(list) {
    obj = {}
    list.map(i => {
        obj[i] = []
    })
    return obj
}

let variables = ["a", "c", "x"]
global.deb = debugg(variables)

const WrapperVisitor = {
    Program(path) {
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

