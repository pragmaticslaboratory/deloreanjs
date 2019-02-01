let b;
let a = b;

const assert = require('assert');
const { dependeciesVisitor } = require('../src/debugger');

describe('t1.1_Declarator Identifier', function(){
    it('Captures Dependencies', function() {
        let { dependencies } = require('../index')('./test/t1.1_declaratorIdentifier.spec.js', [dependeciesVisitor]);
        assert.deepEqual(dependencies,  ['a', 'c', 'x', 'b']);
    });
})
