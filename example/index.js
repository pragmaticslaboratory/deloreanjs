const debuggerDelorean = require('../src/debugger.js');
global.delorean = require('../src/delorean.js')
global.vm = require('../unwinder/runtime/vm.js');

debuggerDelorean('./input.js');