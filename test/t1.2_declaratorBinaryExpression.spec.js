const testingFramework = require('./testingFramework');
testingFramework.check(__filename, ['a', 'c', 'x', 'b'], 't1.2_Declarator BinaryExpression', 'dependencies');

let b;
let c;
let a = b + c;  


