const DeclaratorVisitor = require('./visitors/declarator')

function debugg(lista) {
    obj = {}
    lista.map(i => {
        obj[i] = []
    })
    return obj
}

let variables = ["a", "c", "x"]
global.deb = debugg(variables)

const WrapperVisitor = {
    Program(path) {
        path.traverse(DeclaratorVisitor) // Declaraciones
        console.log(deb)
    }
}

module.exports = function () {
    return {
        visitor: WrapperVisitor
    }
}

