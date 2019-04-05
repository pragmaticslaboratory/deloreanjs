console.log("Start Program")
b = 7;
a = b;

delorean.snapshot();
console.log('First continuation');
c = 0;
a = c;

delorean.snapshot();
console.log('Second continuation');

if(b == 7) {
    throw ['b == 7', continuations];
    //console.log(['Error from VM', continuations]);
}
console.log('End Program');
