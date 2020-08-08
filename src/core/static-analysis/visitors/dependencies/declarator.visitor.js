import _debugger from '../../../index';

export default {
  VariableDeclarator(path) {
    let left = path.node.id.name;
    let right = path.node.init;

    if (right != null) {
      // x = y
      if (right.type == 'Identifier') {
        if (
          _debugger.heap.dependencies.some((dependency) => dependency.name == left) &&
          left != right.name &&
          !_debugger.heap.dependencies.some((dependency) => dependency.name == right.name)
        ) {
          _debugger.heap.addDependency({ name: right.name, type: 'normal' });
        }
      }

      // x = y * z
      if (right.type == 'BinaryExpression' || right.type == 'CallExpression') {
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
    }
  },
};
