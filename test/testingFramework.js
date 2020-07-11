module.exports = {
  check(filename, expected, describeTitle, testType) {
    const assert = require("assert");
    const {
      dependeciesVisitor,
      initConfigVisitor,
      restoreHeapVisitor,
    } = require("../src/staticAnalysis");

    describe(describeTitle, function () {
      switch (testType) {
        case "dependencies":
          it("Captures Dependencies", function () {
            let { dependencies } = require("../index")(filename, [
              dependeciesVisitor,
            ]);
            assert.deepEqual(dependencies, expected);
          });
          break;

        case "addContinuation":
          it("Adds Continuation", function () {
            let { code } = require("../index")(filename, [
              dependeciesVisitor,
              initConfigVisitor,
              restoreHeapVisitor,
            ]);
            console.log(code);
            assert.equal(code, expected);
          });
          break;
      }
    });
  },
};
