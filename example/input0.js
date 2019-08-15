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

delorean.watch(['courseName', 'courseName2']);

var courseName = { a: "Alggebra" };
var courseName2 = { b: "Algebra" };

delorean.insertTimepoint('StrategyNotFound');

var evalStrategyId = findStrategy(courseName.a); //retorna null
var evaluations = getDegrees(courseName.a, studentId); 

var mean = evalStrategies[evalStrategyId](evaluations); //gatilla error
show(mean);
show(heap);`

// export default `// You can use Delorean here! :)
// delorean.watch(['v1', 'v2']);

// var a = 1;
// var v1 = 5;
// var v2 = 2;

// delorean.insertTimepoint("TP");

// var a = a + 1;
// var v1 = 7;
// var v2 = a + 3;

// if(v2 == 5)
//   nonexistentFunction();`