var assert = require('assert');

function captureSnapshot(title, fileName, dictionary){
  it(title, async function() {
    let deb = await require('../index')(fileName);
    assert.deepEqual(deb, dictionary);
  });
}

describe('Snapshot', function (){
    captureSnapshot('Snapshot', './examples/snapshotWithRequire.js', ['a', 'c', 'x'])
});