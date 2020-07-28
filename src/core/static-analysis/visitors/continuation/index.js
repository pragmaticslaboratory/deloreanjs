import { default as continuationFactoryVisitor } from './continuation-factory.visitor';
import { default as storeContinuationVisitor } from './store-continuation.visitor';

const continuationFactory = () => {
  return {
    visitor: continuationFactoryVisitor,
  };
};

const storeContinuation = () => {
  return {
    visitor: storeContinuationVisitor,
  };
};

export { continuationFactory, storeContinuation };
