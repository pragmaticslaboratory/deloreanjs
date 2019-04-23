console.log("Start Program")
b = 7;
a = b;

delorean.snapshot();
console.log('First continuation', b);
c = 0;
a = c;

delorean.snapshot();
console.log('Second continuation', b);

try{
    let t = 10
}
catch(e){
    let t = 4;
}


if(b == 7) {
    throw ["throw activate in VM", continuations];
}
console.log('End Program');
