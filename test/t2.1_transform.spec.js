const assert = require('assert');
const { dependeciesVisitor, initConfigVisitor } = require('../src/debugger');

describe('t2.1_Require', function (){
  it('Adds Require', function() {
    let expected = [
      'const {', 
      '  snapshot',
      '} = require("../src/heap");',
      '',
      'a = 7;',
      'snapshot();',
      'a = 9;',
      'snapshot();'
    ].join('\n')

    let { code } = require('../index.js')([
      'a = 7;',
      'snapshot();',
      'a = 9;',
      'snapshot();'
    ].join('\n'), [ dependeciesVisitor, initConfigVisitor ], true);

    assert.equal(code, expected);
  });
});
