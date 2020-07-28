const t = require('babel-types');
export default {
  Program(path) {
    // continuations = {};
    path.node.body.unshift(
      t.expressionStatement(
        t.assignmentExpression('=', t.identifier('continuations'), t.objectExpression([])),
      ),
    );

    //  function createContinuation() {
    //      return callCC(cont => cont);
    //  }
    path.node.body.unshift(
      t.functionDeclaration(
        t.identifier('createContinuation'),
        [],
        t.blockStatement(
          [
            t.returnStatement(
              t.callExpression(t.identifier('callCC'), [
                t.arrowFunctionExpression([t.identifier('cont')], t.identifier('cont'), false),
              ]),
            ),
          ],
          [],
        ),
        false,
        false,
      ),
    );
  },
};
