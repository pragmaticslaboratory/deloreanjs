export default `/*
Test 3: Understand a bug

Watch variables: [courseNames]
Timepoint creation: Explicit
Goal: should show 4.25
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

function getDegrees(c) {
  if (c == "XAlgebra") {
    return [1, 2, 3];
  } else if (c == "Calculus") {
    return [1, 5, 3];
  } else if (c == "CalculusX") {
    return [1, 2, 3];
  } else if (c == "XAlgebra") {
    return [1, 2, 3];
  } else if (c == "Calculus") {
    return [1, 2, 3];
  } else if (c == "Physics") {
    return [1, 2, 3];
  } else if (c == "Algebra") {
    return [5, 6, 7];
  }
}

var courseNames = ["Calculus", "Alggebra", "Physics", "XAlgebra", "CalculusX"];
var universityMean = 0;

for (var i = 0; i < courseNames.length; ++i) {
  // around 5000 courses
  delorean.insertTimepoint("StrategyNotFound");
  var evalStrategyId = findStrategy(courseNames[i]);
  var mean = evalStrategies[evalStrategyId](getDegrees(courseNames[i]));
  universityMean += mean / courseNames.length;
}

console.log(universityMean); //should show 4.25`;
