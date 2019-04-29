const {
  dependeciesVisitor,
  initConfigVisitor,
  storeContinuationsVisitor
} = require("../src/staticAnalysis");


function restoreHeap(restore){
  a = document.getElementById('input-a').value || heap.snapshots[restore].a || undefined;
  b = document.getElementById('input-b').value || heap.snapshots[restore].b || undefined;
  c = document.getElementById('input-c').value || heap.snapshots[restore].c || undefined;
  x = document.getElementById('input-x').value || heap.snapshots[restore].x || undefined;
}

module.exports = {
  init: (inputCode) => {
    let { code } = require("../index")(inputCode, [
      dependeciesVisitor,
      initConfigVisitor,
      storeContinuationsVisitor
    ], true);
  
    // Agrega un try-catch bajo cada continuacion para evitar perder la instancia de ejeción al invocarse throws dentro de la VM.
    splitCode = code.split("delorean.snapshot();");
    if (splitCode.length != 1) {
      code = splitCode[0] + "\ndelorean.snapshot();\n";
      for (let i = 1; i < splitCode.length; i++) {
        code += splitCode[i] + "\n} \ncatch(e) {\nconsole.log(e)\n}";
        if (i != splitCode.length - 1) code += "\ndelorean.snapshot();\n";
      }
  
      splitCode = code.split(";");
      code = "";
      for (let i = 0; i < splitCode.length; i++) {
        code += splitCode[i];
        if (i != splitCode.length - 1) code += ";";
        if (splitCode[i].includes("continuations.kont")) code += "\ntry {\n";
      }
    }
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