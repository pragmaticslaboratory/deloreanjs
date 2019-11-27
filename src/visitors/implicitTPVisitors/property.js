const t = require('babel-types')
module.exports = {
    CallExpression(path) {
        let foundWatchedVariable = false;
        path.traverse({
            Identifier(path) {
                if (!foundWatchedVariable) {
                    let parent = path.context.parentPath;
                    if (parent.node.type != 'MemberExpression' || parent.node.object.name == path.node.name) {
                        if (dependencies.some(dependency => dependency.name == path.node.name)) {
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
                            foundWatchedVariable = true;
                        }
                    }
                }
            }
        })
    }
}