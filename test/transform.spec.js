var assert = require('assert');
const fs = require('fs');

function transformFile(title, fileName, resultFileName){
  it(title, function() {
    let expected = fs.readFileSync(resultFileName).toString();
    let out = require('../transform.js')(fileName);
    expected = expected.replace(/(?:\r)/g, '');
    assert.equal(out, expected);
  });
}

describe('Require', function (){
    transformFile('Require', './examples/snapshotWithoutRequire.js', './examples/snapshotWithRequire.js');
});