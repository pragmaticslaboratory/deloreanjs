const testingFramework = require("./testingFramework");
testingFramework.check(
  __filename,
  ["a", "c", "x", "d", "e"],
  "t1.3_Declarator CallExpression",
  "dependencies"
);

let d;
let e;
func = function () {};
let a = func(d, e);
