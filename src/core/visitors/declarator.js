module.exports = {
  VariableDeclarator(path) {
    let left = path.node.id.name;
    let right = path.node.init;

    if (right != null) {
      // x = y
      if (right.type == 'Identifier') {
        if (
          global.dependencies.some((dependency) => dependency.name == left) &&
          left != right.name &&
          !global.dependencies.some((dependency) => dependency.name == right.name)
        ) {
          global.dependencies.push({ name: right.name, type: 'normal' });
        }
      }

      // x = y * z
      if (right.type == 'BinaryExpression' || right.type == 'CallExpression') {
        path.traverse({
          Identifier(path) {
            if (
              global.dependencies.some((dependency) => dependency.name == left) &&
              left != path.node.name &&
              !global.dependencies.some((dependency) => dependency.name == path.node.name)
            ) {
              global.dependencies.push({ name: path.node.name, type: 'normal' });
            }
          },
        });
      }
    }
  },
};
