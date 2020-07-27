const t = require('babel-types');
global.snapshotCounter = 0;

module.exports = {
  /* continuations.kont* = createContinuation(); */
  MemberExpression(path) {
    if (
      path.node.object &&
      path.node.property &&
      path.node.object.name == 'delorean' &&
      (path.node.property.name == 'insertTimepoint' ||
        path.node.property.name == 'insertBreakpoint')
    ) {
      var snapshotCall = path.findParent((path) => path.isCallExpression());

      var itIsInLoop = false;
      let parent = path.context.parentPath;
      while (parent) {
        parent = parent.context.parentPath;
        if (parent) {
          if (
            parent.node.type == 'ForStatement' ||
            parent.node.type == 'DoWhileStatement' ||
            parent.node.type == 'WhileStatement'
          ) {
            itIsInLoop = true;
            break;
          }
        }
      }

      if (itIsInLoop) {
        snapshotCall.insertAfter(
          t.expressionStatement(
            t.callExpression(t.identifier('addCont'), [
              t.identifier('kont' + snapshotCall.container.expression.arguments[0].value),
              t.identifier('continuations'),
              t.stringLiteral('kont' + snapshotCall.container.expression.arguments[0].value),
            ]),
          ),
        );
      } else {
        snapshotCall.insertAfter(
          t.expressionStatement(
            t.assignmentExpression(
              '=',
              t.memberExpression(
                t.identifier('continuations'),
                t.identifier('kont' + snapshotCall.container.expression.arguments[0].value),
              ),
              t.identifier('kont' + snapshotCall.container.expression.arguments[0].value),
            ),
          ),
        );
      }

      snapshotCall.insertAfter(
        t.variableDeclaration('var', [
          t.variableDeclarator(
            t.identifier('kont' + snapshotCall.container.expression.arguments[0].value),
            t.callExpression(t.identifier('createContinuation'), []),
          ),
        ]),
      );
      global.snapshotCounter++;
    }
  },
};
