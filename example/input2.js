export default `//helper functions

var evalStrategies = [
    function(degrees) {
        return degrees.reduce(function(a, b) { return a + b; })/degrees.length;
    }
];

function findStrategy(c) {
    if (c == "Algebra") {
        return 0;
    } else return null;
}

function getDegrees(c) {
    if (c == "Algebra") {
        return [4,5,5,4];
    }
}

function show(data) {
    console.log(data);
}

//helper functions

courseNames = ["Alggebra"];

delorean.watch(['courseName']);

universityMean = 0;

for (var i = 0; i < courseNames.length; ++i) { //around 5000 courses
  
  courseName = courseNames[i];
  delorean.insertTimepoint('StrategyNotFound');	
  
  evalStrategyId = findStrategy(courseName);
  mean = evalStrategies[evalStrategyId](getDegrees(courseName));
  universityMean += mean/courseNames.length;
}

show(universityMean);`
