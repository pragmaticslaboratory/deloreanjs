const babel = require('babel-core');

const {
  dependeciesVisitor,
  initConfigVisitor,
  storeContinuationsVisitor,
  tryCatchVisitor
} = require("../src/staticAnalysis");

function restoreHeap(restore){
  a = document.getElementById('input-a').value || heap.snapshots[restore].a || undefined;
  b = document.getElementById('input-b').value || heap.snapshots[restore].b || undefined;
  c = document.getElementById('input-c').value || heap.snapshots[restore].c || undefined;
  x = document.getElementById('input-x').value || heap.snapshots[restore].x || undefined;
}

module.exports = {
  init: (inputCode, ) => {
    let src = require("../index")(inputCode, [
      dependeciesVisitor,
      tryCatchVisitor,
    ], true).code;
  
    let { code } = babel.transform(src, {
      plugins: [initConfigVisitor,
      storeContinuationsVisitor]
    })
  
    console.log(code)

    let compile = require("../unwinder/bin/compile.js")
    let unwindedCode = compile(code);

    try {
      console.log(`%cStart first Eval()`, "background: #222; color: cyan");
      eval(unwindedCode);
      console.log(`%cFinish first Eval()`, "background: #222; color: cyan");
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