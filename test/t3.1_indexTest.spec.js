const delorean = require('../src/delorean');
b = 7
a = b;
delorean.snapshot();
c = 0
a = c;
delorean.snapshot();
if(c == 0) throw 
