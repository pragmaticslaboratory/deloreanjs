module.exports = {
  AssignmentExpression(path) {
    let left = path.node.left;
    while (left.type == 'MemberExpression') {
      left = left.object;
    }
    if (left.type == 'Identifier') left = left.name;
    let right = path.node.right.name;

    // left = right
    if (right != undefined) {
      if (
        global.dependencies.some((dependency) => dependency.name == left) &&
        left != right &&
        !global.dependencies.some((dependency) => dependency.name == right)
      ) {
        global.dependencies.push({ name: right, type: 'normal' });
      }
    }

    // x = y * z
    if (path.node.right.type == 'BinaryExpression' || path.node.right.type == 'CallExpression') {
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
  },
};
