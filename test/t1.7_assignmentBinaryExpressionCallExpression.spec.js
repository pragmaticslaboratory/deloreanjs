const testingFramework = require('./testingFramework');
testingFramework.check(__filename, ['a', 'c', 'x', 'b', 'd', 'e'], 't1.7_Assignment BinaryExpression of CallExpressions', 'dependencies');

let b;
let c;
let d;
let e;
func = function(){}
a = func(b,c) + func (d,e);
