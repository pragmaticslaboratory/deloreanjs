import assignment from './assignment.visitor';
import declarator from './declarator.visitor';
import loop from './loop.visitor';
import property from './property.visitor';
import { addDependencies } from '../../../heap';

export default function () {
  return {
    visitor: {
      Program(path) {
        let pastDependencies;

        do {
          pastDependencies = global.dependencies.length;
          path.traverse(declarator);
          path.traverse(assignment);
          path.traverse(loop);
          path.traverse(property);
        } while (pastDependencies < global.dependencies.length);
        addDependencies(global.dependencies);
      },
    },
  };
}
