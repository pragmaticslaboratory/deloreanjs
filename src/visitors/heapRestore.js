const t = require('babel-types');

function rightType(key) {
   switch(typeof heap.snapshots[restore][key]){
        case 'number': return t.numericLiteral(heap.snapshots[restore][key]);
        case 'string': return t.stringLiteral(heap.snapshots[restore][key]);
        case 'boolean': return t.booleanLiteral(heap.snapshots[restore][key]);
        /*case 'object':
        let properties = [];
            for(let property in heap.snapshots[restore][key]){
                properties.push(t.objectProperty())
            }
        return t.objectExpression(properties);
        case 'function':

        return t.functionExpression(
            t.identifier(heap.snapshots[restore][key].name),
            t.arrayPattern(heap.snapshots[restore][key].arguments),
            

        )*/
    }
}    




module.exports = {
    MemberExpression(path) {
        if(path.node.object && path.node.property && path.node.object.name == 'delorean' && path.node.property.name == 'snapshot'){
            var snapshotCall = path.findParent(path => path.isCallExpression());
            Object.keys(heap.snapshots[restore]).forEach((key) => {
                if(heap.snapshots[restore][key]){
                    snapshotCall.insertAfter(
                        t.expressionStatement(
                            t.assignmentExpression(
                                '=',
                                t.identifier(key),
                                rightType(key)           
                            )
                        )
                    )
                }
            })
        }
    }
}