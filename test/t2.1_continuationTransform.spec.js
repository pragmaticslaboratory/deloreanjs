const testingFramework = require('./testingFramework');
const fs = require('fs');
const { dependeciesVisitor } = require('../src/staticAnalysis');
let index = require('../index')(__filename, [dependeciesVisitor]);
let thisCode = fs.readFileSync(__filename).toString();

const delorean = require('../src/delorean');
a = 7;
delorean.snapshot();
a = 9;
delorean.snapshot();
testingFramework.check(__filename, ['function createContinuation() {', '  return callCC(cont => cont);', '}', '\n'].join('\n') + thisCode, 't2.1_Transform', 'addContinuation');