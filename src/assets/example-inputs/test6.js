export default `/*
Test 6: Complex structures

Watch variables: [average]
Timepoint creation: Implicit
Goal: should be a number
*/

var arr = [
  { name: "n1", salary: 355, mark: 5 },
  { name: "n2", salary: 36, age: 5 },
  { name: "n3", salary: 355, mark: 5 },
  { name: "n4", salary: 355, mark: 5 },
  { name: "n5", age: 5 },
  { name: "n6", salary: 355, mark: 5 }
];

var average = 0;
for (var i = 0; i < arr.length; ++i) {
  average = average + arr[i].salary / arr.length;
}

console.log("The average is:" + average);`;
