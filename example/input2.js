export default `//helper functions

var evalStrategies = [
    function(degrees) {
        return degrees.reduce(function(a, b) { return a + b; })/degrees.length;
    },
    function(degrees) {
        return degrees.reduce(function(a, b) { return a + b; })/degrees.length;
    },
    function(degrees) {
        return degrees.reduce(function(a, b) { return a + b; })/degrees.length;
    }
];

function findStrategy(c) {
    if (c == "Algebra") {
        return 0;
    } else if (c == "Calculus") {
        return 1;
    } else if (c == "Physics") {
        return 2;
    } else {
        return null;
    }
}

function getDegrees(c) {
    if (c == "Algebra") {
        return [4,5,5,4];
    }
    if (c == "Calculus") {
        return [1,2,3,3]
    }
    if (c == "Physics") {
        return [6,3,5,1]
    }
}

function show(data) {
    console.log(data);
}

//helper functions

var courseNames = ["Calculus", "Alggebra", "Physics"];

var universityMean = 0;

for (i = 0; i < courseNames.length; ++i) { //around 5000 courses
  delorean.insertTimepoint('StrategyNotFound');	
  var evalStrategyId = findStrategy(courseNames[i]);
  var mean = evalStrategies[evalStrategyId](getDegrees(courseNames[i]));
  universityMean += mean/courseNames.length;
}

show(universityMean);`;
