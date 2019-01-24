var assert = require('assert');

function dependencyTest(title, fileName, dictionary){
  it(title, async function() {
    let deb = await require('../index')(fileName);
    assert.deepEqual(deb, dictionary);
  });
}

describe('Dictionary', function (){
  dependencyTest('Declarator Identifier', './examples/declaratorIdentifier.js', ['a', 'c', 'x', 'b']);
  dependencyTest('Declarator BinaryExpression', './examples/declaratorBinaryExpression.js', ['a', 'c', 'x', 'b']);
  dependencyTest('Declarator CallExpression', './examples/declaratorCallExpression.js', ['a', 'c', 'x', 'd', 'e']);
  dependencyTest('Assignment Identifier', './examples/assignmentIdentifier.js', ['a', 'c', 'x']);
  dependencyTest('Assignment BinaryExpression', './examples/assignmentBinaryExpression.js', ['a', 'c', 'x', 'd', 'e']);
  dependencyTest('Assignment CallExpression', './examples/assignmentCallExpression.js', ['a', 'c', 'x', 'b']);
});