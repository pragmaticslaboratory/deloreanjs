const heap = '../src/heap';
const t = require('babel-types')

function variableDeclaration(name, require) {
    return t.variableDeclaration(
        'const',
        [t.variableDeclarator(
            t.objectPattern(
                [t.objectProperty(
                   t.identifier(name),
                   t.identifier(name),
                   false,
                   true
                )]
            ),
            t.callExpression(
                t.identifier('require'),
                [t.stringLiteral(require)]
            )
        )]
    )
}


module.exports = {
    Program(path) {
        path.node.body.unshift(
            variableDeclaration('snapshot', heap)
        );
    }
}