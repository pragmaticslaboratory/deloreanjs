const t = require('babel-types');
module.exports = {
  CallExpression(path) {
    let foundWatchedVariable = false;
    path.traverse({
      Identifier(path) {
        if (!foundWatchedVariable) {
          let parent = path.context.parentPath;
          if (parent.node.type != 'MemberExpression' || parent.node.object.name == path.node.name) {
            if (dependencies.some((dependency) => dependency.name == path.node.name)) {
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
                foundWatchedVariable = true;
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
                foundWatchedVariable = true;
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
                foundWatchedVariable = true;
              }
            }
          }
        }
      },
    });
  },
};
