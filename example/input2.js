export default `console.log("Start Program 2")
b = 7;
a = b;

delorean.insertTimePoint('A');
console.log('First continuation', b);
c = 0;
a = c;

delorean.insertTimePoint('B');
console.log('Second continuation', b);

if(b == 7) {
    throw ["throw activate in VM", continuations];
}
console.log('End Program');`
