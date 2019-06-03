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

function getDegrees(c, s) {
    if (c == "Algebra" && studentId == "1") {
        return [4,5,5,4];
    }
}

function show(data) {
    console.log(data);
}

//helper functions

delorean.watch(['courseName']);

courseName = "Alggebra";
studentId = "1";

delorean.insertTimepoint('StrategyNotFound');

evalStrategyId = findStrategy(courseName); //retorna null
evaluations = getDegrees(courseName, studentId); 

mean = evalStrategies[evalStrategyId](evaluations); //gatilla error
show(mean);`
