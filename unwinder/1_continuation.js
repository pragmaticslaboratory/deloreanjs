var staticAnalysis = require('../src/staticAnalysis');
var init = require('../index');
init(__filename, [staticAnalysis.dependeciesVisitor()])
var delorean = require('../src/delorean')

function createContinuation() {
    return callCC(cont => cont);
}

delorean.snapshot();
var continuation = createContinuation();
console.log('first continuation');

if(continuation){
    continuation();
}

console.log('end')
