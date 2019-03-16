const t = require('babel-types')

module.exports = {
    
    /*continuations[kont+restore]()*/

    Program(path) {
        path.node.body.unshift(
            t.expressionStatement(
                t.callExpression(
                    t.memberExpression(
                        t.identifier('continuations'),
                        t.binaryExpression("+", t.identifier('kont'),t.identifier('restore')),
                        true   
                    ),
                    []
                )
            )
        );
    }
}