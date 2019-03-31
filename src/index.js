const debuggerDelorean = require('./debugger.js');
global.delorean = require('./delorean.js')
global.vm = require('../unwinder/runtime/vm.js');

debuggerDelorean('../test/t3.1_indexTest.spec.js');