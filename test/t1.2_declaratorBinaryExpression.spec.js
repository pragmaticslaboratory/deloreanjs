let b;
let c;
let a = b + c;  

const assert = require('assert');
const { dependeciesVisitor } = require('../src/debugger');

describe('t1.2_Declarator BinaryExpression', function(){
    it('Captures Dependencies', function() {
        let { dependencies } = require('../index')('./test/t1.2_declaratorBinaryExpression.spec.js', [dependeciesVisitor]);
        assert.deepEqual(dependencies,  ['a', 'c', 'x', 'b']);
    });
})


