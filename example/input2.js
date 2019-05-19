export default `delorean.watch(['a', 'c', 'x']);

function delay(ms){
    const startPoint = new Date().getTime()
    while (new Date().getTime() - startPoint <= ms) { /* wait */}
}

console.log("Start Program")

delorean.insertTimePoint('A');
console.log('First TimePoint');
var b = 7;

var t = 0;
for(i = 0; i < 5; ++i){
    t += i;
    delay(100)
    delorean.insertTimePoint('C');
    console.log('For TimePoint', i);
}

if(b == 7) {
    throw ["throw activate in VM", continuations];
}
console.log('End Program');`
