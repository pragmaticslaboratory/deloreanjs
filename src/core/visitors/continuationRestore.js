/* eslint-disable */
const t = require('babel-types');

module.exports = {
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
