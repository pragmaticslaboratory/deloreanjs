/* deprecated */
const t = require('babel-types');
export default {
  /* continuations.kont${restore}(); */
  Program(path) {
    path.node.body.unshift(
      t.expressionStatement(
        t.callExpression(
          t.memberExpression(t.identifier('continuations'), t.identifier(`kont${restore}`)),
          [],
        ),
      ),
    );
  },
};
