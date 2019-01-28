const assert = require('assert');
const fs = require('fs');
const { dependeciesVisitor, initConfigVisitor } = require('../src/debugger')

function transformFile(title, fileName, resultFileName){
  it(title, function() {
    let expected = fs.readFileSync(resultFileName).toString();
    let { code } = require('../index.js')(fileName, [ dependeciesVisitor, initConfigVisitor ]);
    expected = expected.replace(/(?:\r)/g, '');
    assert.equal(code, expected);
  });
}

describe('Require', function (){
    transformFile('Require', './examples/snapshotWithoutRequire.js', './examples/outputs/snapshotWithoutRequire.js');
});