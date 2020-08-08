import _debugger from '../../../index';

export default {
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
        _debugger.heap.dependencies.some((dependency) => dependency.name == left) &&
        left != right &&
        !_debugger.heap.dependencies.some((dependency) => dependency.name == right)
      ) {
        _debugger.heap.addDependency({ name: right, type: 'normal' });
      }
    }

    // x = y * z
    if (path.node.right.type == 'BinaryExpression' || path.node.right.type == 'CallExpression') {
      path.traverse({
        Identifier(path) {
          if (
            _debugger.heap.dependencies.some((dependency) => dependency.name == left) &&
            left != path.node.name &&
            !_debugger.heap.dependencies.some((dependency) => dependency.name == path.node.name)
          ) {
            _debugger.heap.addDependency({ name: path.node.name, type: 'normal' });
          }
        },
      });
    }
  },
};
