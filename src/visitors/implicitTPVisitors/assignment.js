//must detect every change

const t = require('babel-types')
module.exports = {
    AssignmentExpression(path) {
        let left = path.node.left.name
        if (dependencies.some(dependency => dependency.name == left)) {
            parent = path.context.parentPath;
            while (parent && parent.node.type != 'ExpressionStatement') {
                parent = parent.context.parentPath;

            }
            if (parent && !isTimePoint(parent.getSibling(parent.key + 1).node)) {
                parent.insertAfter(
                    t.expressionStatement(
                        t.callExpression(
                            t.memberExpression(
                                t.identifier('delorean'),
                                t.identifier('insertTimepoint'),
                                false
                            ),
                            [                               
                                t.stringLiteral('Implicit' + implicitCounter)
                            ]
                        )
                    )
                );
                ++implicitCounter;
            }
        }
    }
}
