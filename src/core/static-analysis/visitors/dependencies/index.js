import assignment from './assignment.visitor';
import declarator from './declarator.visitor';
import loop from './loop.visitor';
import property from './property.visitor';
import _debugger from '../../../index';

export default function () {
  return {
    visitor: {
      Program(path) {
        let pastDependencies;

        do {
          pastDependencies = _debugger.heap.dependencies.length;
          path.traverse(declarator);
          path.traverse(assignment);
          path.traverse(loop);
          path.traverse(property);
        } while (pastDependencies < _debugger.heap.dependencies.length);
      },
    },
  };
}
