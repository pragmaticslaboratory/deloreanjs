export default `var evalStrategies = [
  function(degrees) {
      return degrees.reduce(function(a, b) { return a + b; })/degrees.length;
  }
];

function findStrategy(c) {
  console.log(c);
  if (c == "Algebra") {
      return 0;
  } else return null;
}

function getDegrees(c, s) {
  if (c == "Algebra" && studentId == "1") {
      return [4,5,5,4];
  }
}

function show(data) {
  console.log(data);
}

var courseName = "Alggebra";
var studentId = "1";

delorean.insertTimepoint('StrategyNotFound');

var evalStrategyId = findStrategy(courseName); //retorna null
var evaluations = getDegrees(courseName, studentId); 

var mean = evalStrategies[evalStrategyId](evaluations); //gatilla error
show(mean);`;
