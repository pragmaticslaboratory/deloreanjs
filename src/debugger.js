const {
  dependeciesVisitor,
  initConfigVisitor,
  storeContinuationsVisitor
} = require("../src/staticAnalysis");

module.exports = filename => {
  let { code } = require("../index")(filename, [
    dependeciesVisitor,
    initConfigVisitor,
    storeContinuationsVisitor
  ]);

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

  let unwindedCode = require("../unwinder/bin/compile.js")(code);

  // Esta funcion debe ser dinamica en funcion de las variables a observar que defina el usuario.
  function restoreProgram(restore) {
    a = document.getElementById("input-a").value || heap.snapshots[restore].a || undefined;
    b = document.getElementById("input-b").value || heap.snapshots[restore].b || undefined;
    c = document.getElementById("input-c").value || heap.snapshots[restore].c || undefined;
    x = document.getElementById("input-x").value || heap.snapshots[restore].x || undefined;
  }

  const invokeContinuation = kont => {
    restoreProgram(kont - 1);
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
  };

  const createButtons = () => {
    const container = document.getElementById("container-buttons");
    let index = 0;
    heap.snapshots.map(() => {
      container.insertAdjacentHTML(
        "beforeend",
        `<div>
            <button kont="${++index}" id="${index}">kont ${index}</button>
        </div>`
      );
    });

    const inputs = document.getElementById("container-inputs");
    heap.dependencies.map(item => {
      inputs.insertAdjacentHTML(
        "beforeend",
        `${item} = <input type="text" id="input-${item}" name="${item}" />`
      );
    });

    container.addEventListener("click", item => {
      let kont = item.target.getAttribute("kont");
      invokeContinuation(kont);
    });
  };

  try {
    console.log(`%cStart first Eval()`, "background: #222; color: cyan");
    eval(unwindedCode);
    console.log(`%cFinish first Eval()`, "background: #222; color: cyan");
  } catch (e) {
    console.log(e, "Error from VM");
  }
  createButtons();
};
