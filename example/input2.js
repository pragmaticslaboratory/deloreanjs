export default `delorean.watch(['a', 'c', 'x']);
console.log("Start Program")
b = 7;
a = b;

delorean.insertTimePoint('A');
console.log('First continuation', b);
c = 0;
a = c;

delorean.insertTimePoint('B');
console.log('Second continuation', b);

var t = 0;
for(i = 0; i < 5; ++i){
    t += i;
    if(i == 3) delorean.insertTimePoint('C');
    console.log('Third continuation', b, i);
}

if(b == 7) {
    throw ["throw activate in VM", continuations];
}
console.log('End Program');`
