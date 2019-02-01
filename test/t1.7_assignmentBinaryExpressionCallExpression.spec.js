let b;
let c;
let d;
let e;
func = function(){}
a = func(b,c) + func (d,e);

const assert = require('assert');
const { dependeciesVisitor } = require('../src/debugger');

describe('t1.7_Assignment BinaryExpression of CallExpressions', function(){
    it('Captures Dependencies', function() {
        let { dependencies } = require('../index')('./test/t1.7_assignmentBinaryExpressionCallExpression.spec.js', [dependeciesVisitor]);
        assert.deepEqual(dependencies,  ['a', 'c', 'x', 'b', 'd', 'e']);
    });
})
