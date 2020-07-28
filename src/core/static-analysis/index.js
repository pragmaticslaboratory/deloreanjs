import { transform } from 'babel-core';
import { compile, vm } from 'unwinder-engine';
import {
  dependencyVisitor,
  implicitTimepointVisitor,
  storeContinuationVisitor,
  continuationFactoryVisitor,
  ifBlockVisitor,
  tryCatchVisitor,
  throwBreakVisitor,
  timepointLineVisitor,
  restoreHeapVisitor,
} from './visitors';
import { transformWithoutBabel } from './helpers';

const transpile = (code, visitors) => {
  return transform(code, {
    plugins: visitors,
  }).code;
};

const prepareCode = (code) => {
  let visitors = [timepointLineVisitor, dependencyVisitor];
  if (global.implicitTimpeoints) visitors.push(implicitTimepointVisitor);
  code = transpile(code, [...visitors, tryCatchVisitor]);
  code = transpile(code, [
    ifBlockVisitor,
    continuationFactoryVisitor,
    restoreHeapVisitor,
    throwBreakVisitor,
    storeContinuationVisitor,
  ]);
  code = transformWithoutBabel(code);
  return compile(code);
};

export { prepareCode };
