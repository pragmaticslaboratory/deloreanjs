const t = require('babel-types');

module.exports = {
  /*
        console.log('Execution paused');
        throw;
    */
  MemberExpression(path) {
    if (
      path.node.object &&
      path.node.property &&
      path.node.object.name == 'delorean' &&
      path.node.property.name == 'insertBreakpoint'
    ) {
      var snapshotCall = path.findParent((path) => path.isCallExpression());

      snapshotCall.insertAfter(
        t.ifStatement(
          t.unaryExpression('!', t.identifier('fromTheFuture'), true),
          t.blockStatement(
            [
              t.expressionStatement(
                t.callExpression(t.memberExpression(t.identifier('console'), t.identifier('log')), [
                  t.stringLiteral('%cExecution paused.'),
                  t.stringLiteral('background: #222; color: yellow'),
                ]),
              ),
              t.throwStatement(t.stringLiteral('')),
            ],
            [],
          ),
          null,
        ),
      );
    }
  },
};

//HEAP STORE
//TP
//KONT
//throw
//HEAP RESTORE
