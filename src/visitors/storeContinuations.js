const t = require('babel-types');
let snapshotCounter = 0;


module.exports = {
    /* continuations.kont* = createContinuation(); */
    MemberExpression(path) {
        if(path.node.object && path.node.property && path.node.object.name == 'delorean' && path.node.property.name == 'insertTimePoint'){
            var snapshotCall = path.findParent(path => path.isCallExpression());  

            snapshotCall.insertAfter(
                t.expressionStatement(
                    t.callExpression(
                        t.identifier('addCont'),
                        [t.identifier('kont' + snapshotCall.container.expression.arguments[0].value),
                        t.identifier('continuations'),
                        t.stringLiteral('kont' + snapshotCall.container.expression.arguments[0].value)]      
                    )
                )
            ) 
            snapshotCall.insertAfter(
                t.variableDeclaration(
                    'var',
                    [t.variableDeclarator(
                        t.identifier('kont' + snapshotCall.container.expression.arguments[0].value),
                        t.callExpression(
                            t.identifier('createContinuation'),
                            []
                        )
                    )]
                )
                
            )                  
            snapshotCounter++;
        }
    }
}