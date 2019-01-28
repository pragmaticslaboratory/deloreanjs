const t = require('babel-types');
const heap = '../src/heap';
const index = '../index';

function variableDeclaration(name, require) {
    return t.variableDeclaration(
        "let",
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
                t.identifier("require"),
                [t.stringLiteral(require)]
            )
        )]
    )
}


module.exports = function (fileOut) {
    programVisitor = {
        Program(path) {
            path.node.body.unshift(
                variableDeclaration("snapshot", heap),
                variableDeclaration("storeHeapFile", heap),
                variableDeclaration("createHeapFile", heap),
                variableDeclaration("cleanHeapFile", heap),
                t.variableDeclaration("let", [t.variableDeclarator(t.identifier("addDependencies"), t.callExpression(t.identifier("require"), [t.stringLiteral(index)]))]),
                t.expressionStatement(t.callExpression(t.identifier("createHeapFile"), [])),
                t.expressionStatement(t.callExpression(t.identifier("cleanHeapFile"), [])),
                t.expressionStatement(t.callExpression(t.identifier("addDependencies"), [t.stringLiteral(fileOut)]))
            );
            path.node.body.push(
                t.expressionStatement(t.callExpression(t.identifier("storeHeapFile"), [])),
            );
        }
    }
    return programVisitor;
}