const t = require('babel-types');
let snapshotCounter = 0;


module.exports = {
    /* continuations.kont* = createContinuation(); */
    MemberExpression(path) {
        if(path.node.object && path.node.property && path.node.object.name == 'delorean' && path.node.property.name == 'snapshot'){
            var snapshotCall = path.findParent(path => path.isCallExpression());  
            snapshotCall.insertAfter(
                t.expressionStatement(
                    t.assignmentExpression(
                        '=',
                        t.memberExpression(
                            t.identifier('continuations'),
                            t.identifier('kont' + snapshotCounter)
                        ),
                        t.identifier('kont' + snapshotCounter)       
                    )
                )
            ) 
            snapshotCall.insertAfter(
                t.variableDeclaration(
                    'var',
                    [t.variableDeclarator(
                        t.identifier('kont' + snapshotCounter),
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