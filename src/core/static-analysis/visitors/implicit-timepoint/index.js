import assignment from './assignment.visitor';
import declarator from './declarator.visitor';
import property from './property.visitor';
import unary from './unary.visitor';
import update from './update.visitor';

export default function () {
  return {
    visitor: {
      Program(path) {
        path.traverse(assignment);
        path.traverse(declarator);
        path.traverse(property);
        path.traverse(unary);
        path.traverse(update);
      },
    },
  };
}
