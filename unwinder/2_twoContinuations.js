function createContinuation() {
    return callCC(cont => cont);
}

var continuations = {}

var staticAnalysis = require('../src/staticAnalysis');
var init = require('../index');
init(__filename, [staticAnalysis.dependeciesVisitor()])
var delorean = require('../src/delorean')

delorean.snapshot();
var kont1 = createContinuation()
continuations.kont1 = kont1;
console.log('first continuation');

delorean.snapshot();
var kont2 = createContinuation()
continuations.kont2 = kont2;
console.log('second continuation');

if(continuations.kont2){
    continuations.kont2();
}

console.log('end')
