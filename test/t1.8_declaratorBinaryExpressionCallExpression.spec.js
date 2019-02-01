let b;
let c;
let d;
let e;
func = function(){}
let a = func(b,c) + func (d,e);

const assert = require('assert');
const { dependeciesVisitor } = require('../src/debugger');

describe('t1.8_Declarator BinaryExpression of CallExpressions', function(){
    it('Captures Dependencies', function() {
        let { dependencies } = require('../index')('./test/t1.8_declaratorBinaryExpressionCallExpression.spec.js', [dependeciesVisitor]);
        assert.deepEqual(dependencies,  ['a', 'c', 'x', 'b', 'd', 'e']);
    });
})
