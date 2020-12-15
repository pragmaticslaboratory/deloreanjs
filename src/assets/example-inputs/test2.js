export default `/*
Test 2: Bug in a loop

Watch variables: [sum]
Timepoint creation: Explicit
Goal: should show 10 (detect when it sum goes to NaN)
*/

function createMatrix(n, m) {
  let matrix = [];
  for (let i = 0; i < n; ++i) {
    matrix[i] = [];
    for (let j = 0; j < m; ++j) {
      matrix[i][j] = i * 10 + j;
    }
  }
  return matrix;
}

let n = 2;
let m = 1;
let matrix = createMatrix(n, m);

let sum = 0;

for (let i = 0; i < n; ++i) {
  for (let j = 0; j < n; ++j) {
    delorean.insertTimepoint("sumFor");
    sum = sum + matrix[i][j];
  }
}

console.log(sum); //should show 10`;
