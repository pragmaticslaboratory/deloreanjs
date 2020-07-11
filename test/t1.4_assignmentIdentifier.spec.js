const testingFramework = require("./testingFramework");
testingFramework.check(
  __filename,
  ["a", "c", "x"],
  "t1.4_Assignment Identifier",
  "dependencies"
);

let c;
a = c;
