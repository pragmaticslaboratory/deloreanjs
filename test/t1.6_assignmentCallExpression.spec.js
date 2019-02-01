let b;
let c;
func = function(){}
a = func(b,c)

const assert = require('assert');
const { dependeciesVisitor } = require('../src/debugger');

describe('t1.6_Assignment CallExpression', function(){
    it('Captures Dependencies', function() {
        let { dependencies } = require('../index')('./test/t1.6_assignmentCallExpression.spec.js', [dependeciesVisitor]);
        assert.deepEqual(dependencies,  ['a', 'c', 'x', 'b']);
    });
})
