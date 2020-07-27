//must detect every change

const t = require('babel-types');
module.exports = {
  AssignmentExpression(path) {
    let left = path.node.left.name;
    if (dependencies.some((dependency) => dependency.name == left)) {
      parent = path.context.parentPath;
      while (
        parent &&
        parent.node.type != 'ExpressionStatement' &&
        parent.node.type != 'ForStatement' &&
        parent.node.type != 'WhileStatement' &&
        parent.node.type != 'IfStatement' &&
        parent.node.type != 'DoWhileStatement'
      ) {
        parent = parent.context.parentPath;
      }

      if (parent && parent.node.type == 'ExpressionStatement') {
        if (parent && !isTimePoint(parent.getSibling(parent.key + 1).node)) {
          parent.insertAfter(
            t.expressionStatement(
              t.callExpression(
                t.memberExpression(
                  t.identifier('delorean'),
                  t.identifier('insertTimepoint'),
                  false,
                ),
                [t.stringLiteral('Implicit' + implicitCounter)],
              ),
            ),
          );
          ++implicitCounter;
        }
      } else if (parent && parent.node.type != 'IfStatement') {
        if (!isTimePoint(parent.node.body.body[0])) {
          parent
            .get('body')
            .unshiftContainer(
              'body',
              t.expressionStatement(
                t.callExpression(
                  t.memberExpression(
                    t.identifier('delorean'),
                    t.identifier('insertTimepoint'),
                    false,
                  ),
                  [t.stringLiteral('Implicit' + implicitCounter)],
                ),
              ),
            );
          ++implicitCounter;
        }
      } else if (parent && parent.node.type == 'IfStatement') {
        if (!isTimePoint(parent.node.body.body[0])) {
          parent
            .get('body')
            .unshiftContainer(
              'body',
              t.expressionStatement(
                t.callExpression(
                  t.memberExpression(
                    t.identifier('delorean'),
                    t.identifier('insertTimepoint'),
                    false,
                  ),
                  [t.stringLiteral('Implicit' + implicitCounter)],
                ),
              ),
            );
          ++implicitCounter;
        }
        if (path.node.consequent.type != 'BlockStatement') {
          let block = t.blockStatement([path.node.consequent], []);
          path.node.consequent = block;
        }
        let alternate = parent.node.alternate;
        if (!isTimePoint(alternate.node.body[0])) {
          alternate
            .get('body')
            .unshiftContainer(
              'body',
              t.expressionStatement(
                t.callExpression(
                  t.memberExpression(
                    t.identifier('delorean'),
                    t.identifier('insertTimepoint'),
                    false,
                  ),
                  [t.stringLiteral('Implicit' + implicitCounter)],
                ),
              ),
            );
          ++implicitCounter;
        }
      }
    }
  },
};
