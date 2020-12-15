export default `/*
Test 1: Fix a simple bug

Watch variables: [courseName]
Timepoint creation: Explicit
Goal: should show 4.5 (detect why function triggers an error)
*/

var evalStrategies = [
  function(degrees) {
    return (
      degrees.reduce(function(a, b) {
        return a + b;
      }) / degrees.length
    );
  },
  function(degrees) {
    return (
      degrees.reduce(function(a, b) {
        return a + b;
      }) / degrees.length
    );
  },
  function(degrees) {
    return (
      degrees.reduce(function(a, b) {
        return a + b;
      }) / degrees.length
    );
  }
];

function findStrategy(c) {
  if (c == "XAlgebra") {
    return 0;
  } else if (c == "Calculus") {
    return 1;
  } else if (c == "CalculusX") {
    return 1;
  } else if (c == "XAlgebra") {
    return 0;
  } else if (c == "Calculus") {
    return 1;
  } else if (c == "Physics") {
    return 2;
  } else if (c == "Algebra") {
    return 1;
  }
}

function getDegrees(c, s) {
  if (c == "Algebra" && studentId == "1") {
    return [4, 5, 5, 4];
  }
}

var courseName = "Alggebra";
var studentId = "1";

delorean.insertTimepoint("StrategyNotFound");

var evalStrategyId = findStrategy(courseName); //retorna null
var evaluations = getDegrees(courseName, studentId);

var mean = evalStrategies[evalStrategyId](evaluations); //gatilla error
console.log(mean);`;
