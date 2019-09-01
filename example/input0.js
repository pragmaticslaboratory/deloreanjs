export default `// You can use Delorean here! :)
delorean.watch(['v1', 'v2']);

var a = 1;
var v1 = 5;
var v2 = 2;

delorean.insertTimepoint("TP");

var a = a + 1;
var v1 = 7;
var v2 = a + 3;

if(v2 == 5)
  nonexistentFunction();`