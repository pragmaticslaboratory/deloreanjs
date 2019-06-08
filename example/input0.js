export default `// You can use Delorean here! :)
delorean.watch(['v1', 'v2']);
a = 1;
v1 = 5;
v2 = 2;

delorean.insertTimepoint("TP");

a = a + 1;
v1 = 7;
v2 = a + 3;

if(v2 == 5)
  nonexistentFunction();`