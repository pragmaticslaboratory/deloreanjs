let {
  snapshot
} = require("../src/heap");

let {
  storeHeapFile
} = require("../src/heap");

let {
  createHeapFile
} = require("../src/heap");

let {
  cleanHeapFile
} = require("../src/heap");

let addDependencies = require("../index");

createHeapFile();
cleanHeapFile();
addDependencies("./examples/snapshotWithRequire.js");
a = 7;
snapshot();
a = 9;
snapshot();
storeHeapFile();