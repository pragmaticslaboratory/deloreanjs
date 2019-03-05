const testingFramework = require('./testingFramework');
const fs = require('fs');
const { dependeciesVisitor } = require('../src/staticAnalysis');
let index = require('../index')(__filename, [dependeciesVisitor]);
let thisCode = fs.readFileSync(__filename).toString();

const delorean = require('../src/delorean');
b = 7
a = b;
delorean.snapshot();
c = 9
a = c;
delorean.snapshot();

testingFramework.check(__filename, ['function createContinuation() {', '  return callCC(cont => cont);', '}', '\n'].join('\n') + thisCode, 't2.1_Transform', 'addContinuation');