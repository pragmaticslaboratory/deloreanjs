// const dependeciesVisitor = require('../src/staticAnalysis').dependeciesVisitor;
// let dependencies = require('../index')(__filename, [dependeciesVisitor]);
// const delorean = require('../src/delorean')

function createContinuation() {
    return callCC(cont => cont);
}

a = 7;
// delorean.snapshot();
var continuation = createContinuation();
console.log('first continuation');

if(continuation){
    console.log()
    continuation();
}

console.log('end')
