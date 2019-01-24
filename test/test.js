var assert = require('assert');

function test(title, fileName, dictionary){
  it(title, async function() {
    let deb = await require('./../index')(fileName);
    assert.deepEqual(deb, dictionary)
  });
}


describe('Dictionary', function() {
  test('Declarator Identifier', './tests/declaratorIdentifier.js',{a:['b'],c:[],x:[]});
  test('Declarator BinaryExpression', './tests/declaratorBinaryExpression.js',{a:['b','c'],c:[],x:[]});
  test('Declarator CallExpression', './tests/declaratorCallExpression.js',{a:['d','e'],c:[],x:[]});
  test('Assignment Identifier', './tests/assignmentIdentifier.js',{a:['c'],c:[],x:[]});
  test('Assignment BinaryExpression', './tests/assignmentBinaryExpression.js',{a:['d','e'],c:[],x:[]});
  test('Assignment CallExpression', './tests/assignmentCallExpression.js',{a:['b','c'],c:[],x:[]});
});