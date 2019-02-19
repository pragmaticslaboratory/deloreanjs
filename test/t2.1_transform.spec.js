const testingFramework = require('./testingFramework');
const { dependeciesVisitor } = require('../src/staticAnalysis');
let { dependencies } = require('../index')(__filename, [dependeciesVisitor]);

const delorean = require('../src/delorean')
a = 7;
delorean.snapshot();
a = 9;
delorean.snapshot();

//TO DO: Transformation test.