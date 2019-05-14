const babel = require('babel-core');

const {
  dependenciesVisitor,
  initConfigVisitor,
  storeContinuationsVisitor,
  tryCatchVisitor,
  ifBlockVisitor
} = require("../src/staticAnalysis");

function restoreHeap(restore){
  dependencies.map((key) => {
    eval(`${key} = document.getElementById('input-${key}').value || heap.snapshots[${restore}].${key} || undefined;`)
  })
}

module.exports = {
  init: (inputCode, ) => {
    let src = require("../index")(inputCode, [
      dependenciesVisitor,
      tryCatchVisitor,
    ], true).code;
  
    let { code } = babel.transform(src, {
      plugins: [ifBlockVisitor, initConfigVisitor,
      storeContinuationsVisitor]
    })

    let compile = require("../unwinder/bin/compile.js")
    let unwindedCode = compile(code);

    try {
      console.log(`%cStart first execution`, "background: #222; color: cyan");
      eval(unwindedCode);
      console.log(`%cFinish first execution`, "background: #222; color: cyan");
    } catch (e) {
      console.log(e, "Error from VM");
    }
  },

  invokeContinuation: (kont) => {
    restoreHeap(kont-1)
    try {
      console.log(`%cStart Continuation ${kont}`,"background: #222; color: #bada55");
      eval(
        `let kontAux = continuations.kont${kont - 1}; 
        continuations.kont${kont -1}(); 
        continuations.kont${kont - 1} = kontAux`
      );
      console.log(`%cEnd Continuation ${kont}`,"background: #222; color: #bada55");
    } catch (e) {
      console.log(e, "Error from VM");
    }
  }
}