b = 7
a = b;
delorean.snapshot();
console.log('first continuation');
c = 0
a = c;
delorean.snapshot();
console.log('second continuation');
if(b == 7) throw 'index error';
console.log("b es = ", b)
console.log('fixed');
