let d;
let e;
func = function(){}
let a = func(d,e);

const assert = require('assert');
const { dependeciesVisitor } = require('../src/debugger');

describe('t1.3_Declarator CallExpression', function(){
    it('Captures Dependencies', function() {
        let { dependencies } = require('../index')('./test/t1.3_declaratorCallExpression.spec.js', [dependeciesVisitor]);
        assert.deepEqual(dependencies,  ['a', 'c', 'x', 'd', 'e']);
    });
})