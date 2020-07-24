export default `delorean.watch(['case1', 'case2', 'case3', 'case4', 'case5', 'case6', 'case7']);
var case1 = { 
    a: "Alggebra", 
};

var case2 = { 
    a: "Algebra", 
    b: "Calculo",
    c: "Quimica",
};

var case3 = { 
    a: "Algebra",
    b: ["Algebra", "Calculo"] 
};

var case4 = { 
    a: "Algebra",
    b: {
        a: "Algebra",
        b: "Calculo"
    }
};

var case5 = ["Alegebra", "Calculus"];

var case6 = [
    {
        a: "Algebra"
    }, 
    {
        a: "Calculo"
    }
];

var case7 = { 
    a: {
        a: {
            a: "Algebra"
        }
    }
};

delorean.insertTimepoint('Test');
console.log([case1, case2, case3, case4, case5, case6, case7])
throw "Triggering a tester exception";`;
