const testingFramework = require("./testingFramework");
testingFramework.check(
  __filename,
  ["a", "c", "x", "b"],
  "t1.1_Declarator Identifier",
  "dependencies"
);

let b;
let a = b;
