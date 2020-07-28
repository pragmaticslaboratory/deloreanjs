import assignment from './assignment.visitor';
import declarator from './declarator.visitor';
import loop from './loop.visitor';
import property from './property.visitor';
import { addDependencies } from '../../../heap';

const dependencyVisitor = {
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
};

export default function () {
  return {
    visitor: dependencyVisitor,
  };
}
