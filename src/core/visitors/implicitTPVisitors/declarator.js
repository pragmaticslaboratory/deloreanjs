const t = require('babel-types');
module.exports = {
  VariableDeclarator(path) {
    let left = path.node.id.name;
    if (global.dependencies.some((dependency) => dependency.name == left)) {
      var parent = path.findParent((path) => path.isVariableDeclaration());
      if (parent.context.parentPath.node.type != 'ForStatement') {
        if (parent && !global.isTimePoint(parent.getSibling(parent.key + 1).node)) {
          parent.insertAfter(
            t.expressionStatement(
              t.callExpression(
                t.memberExpression(
                  t.identifier('delorean'),
                  t.identifier('insertTimepoint'),
                  false,
                ),
                [t.stringLiteral('Implicit' + global.implicitCounter)],
              ),
            ),
          );
          ++global.implicitCounter;
        }
      } else {
        parent = parent.context.parentPath;
        if (!global.isTimePoint(parent.node.body.body[0])) {
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
                  [t.stringLiteral('Implicit' + global.implicitCounter)],
                ),
              ),
            );
          ++global.implicitCounter;
        }
      }
    }
  },
};
