console.log("Start Program")
b = 7;
a = b;

delorean.insertTimePoint('A');
console.log('First continuation', b);
c = 0;
a = c;

delorean.insertTimePoint('B');
console.log('Second continuation', b);

let t = 0;
for(let i = 0; i < 10; ++i){
    t += i;
    delorean.insertTimePoint('C');
    console.log('Third continuation', b);
}

if(b == 7) {
    throw ["throw activate in VM", continuations];
}
console.log('End Program');
