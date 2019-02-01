let c;
a = c;

const assert = require('assert');
const { dependeciesVisitor } = require('../src/debugger');

describe('t1.4_Assignment Identifier', function(){
    it('Captures Dependencies', function() {
        let { dependencies } = require('../index')('./test/t1.4_assignmentIdentifier.spec.js', [dependeciesVisitor]);
        assert.deepEqual(dependencies,  ['a', 'c', 'x']);
    });
})

