//Finds dependencies in cicles.
module.exports = {
  'ForStatement|DoWhileStatement|WhileStatement'(path) {
    let test = path.get('test');

    if (test.type == 'BinaryExpression' || test.type == 'CallExpression') {
      let hasTimepoint = false;
      path.traverse({
        ExpressionStatement(path) {
          if (isTimePoint(path.node)) hasTimepoint = true;
        },
      });
      if (hasTimepoint) {
        test.traverse({
          Identifier(path) {
            var isInMemberExpression = false;
            parent = path.context.parentPath;
            while (
              parent.node.type != 'ForStatement' &&
              parent.node.type != 'WhileStatement' &&
              parent.node.type != 'DoWhileStatement'
            ) {
              if (parent.node.type == 'MemberExpression') {
                isInMemberExpression = true;
                break;
              }

              parent = parent.context.parentPath;
            }

            if (
              !isInMemberExpression &&
              !dependencies.some((dependency) => dependency.name == path.node.name)
            ) {
              dependencies.push({ name: path.node.name, type: 'loop' });
            }
          },
        });
      }
    }
  },
};
