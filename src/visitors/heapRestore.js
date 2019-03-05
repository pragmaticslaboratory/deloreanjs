const t = require('babel-types');
let snapshotCounter = 0;

module.exports = {
    MemberExpression(path) {
        if(path.node.object && path.node.property && path.node.object.name == 'delorean' && path.node.property.name == 'snapshot'){
            var snapshotCall = path.findParent(path => path.isCallExpression())
            Object.keys(heap.snapshots[snapshotCounter]).forEach((key) => {
                // switch typeof                
                snapshotCall.insertAfter(
                    t.expressionStatement(
                        t.assignmentExpression(
                            '=',
                            t.identifier(key),
                            // typeof
                        )
                    )
                )
            })
            snapshotCounter++;
        }
    }
}