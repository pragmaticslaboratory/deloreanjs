#!/usr/bin/env node

// var fs = require('fs');

module.exports = function(inputCode) {
    var compiler = require(__dirname + '/../main');
    var sweet = require('sweet.js');

    var src = sweet.compile(inputCode, { noBabel: true }).code;
    var output = compiler(src, { includeDebug: true });
    var finalSrc =
        "var $Machine = require('../unwinder/runtime/vm.js').$Machine;\n" +
        "var $ContinuationExc = require('../unwinder/runtime/vm.js').$ContinuationExc;\n" +
        "var $Frame = require('../unwinder/runtime/vm.js').$Frame;\n" +
        "var $DebugInfo = require('../unwinder/runtime/vm.js').$DebugInfo;\n" +
        output.code +
        "var VM = new $Machine();\n" +
        "VM.on('paused', function() { VM.continue() });\n" +
        "VM.on('error', function(e) { console.log('error', e) });\n" +
        "VM.setDebugInfo(new $DebugInfo(__debugInfo));\n" +
        "VM.execute($__global);"
  
    return finalSrc
  }
  