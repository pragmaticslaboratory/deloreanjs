let d;
let e;
a = d + e;  

const assert = require('assert');
const { dependeciesVisitor } = require('../src/debugger');

describe('t1.5_Assignment BinaryExpression', function(){
    it('Captures Dependencies', function() {
        let { dependencies } = require('../index')('./test/t1.5_assignmentBinaryExpression.spec.js', [dependeciesVisitor]);
        assert.deepEqual(dependencies,  ['a', 'c', 'x', 'd', 'e']);
    });
})