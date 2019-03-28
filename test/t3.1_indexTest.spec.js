const delorean = require('../src/delorean');

b = 7
a = b;
delorean.snapshot();
console.log('first continuation');
c = 0
a = c;
delorean.snapshot();
console.log('first continuation');
if(b == 7) throw 'index error';
console.log('fixed');
