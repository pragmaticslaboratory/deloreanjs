export default `/*
Test 5: The implicit timepoint mode to solve bugs

Watch variables: [universityMean, realMean]
Timepoint creation: Implicit
Goal: should show a report
*/

function showReportOfBadCourses() {
  console.log("Showing bad courses");
}

function showReportOfOutLayerCourses() {
  console.log("Showing outlayer courses");
}

function showReportOfBestCourses() {
  console.log("Showing best courses");
}

var marks = [5, 4, 3, 2, 5, 1, 2, 5, 5];
var universityMean = 0;

for (let i = 0; i < marks.length; ++i) {
  universityMean += marks[i] / marks.length / maximumMean;
}

var maximumMean = 7.0;

var realMean = universityMean / maximumMean;

console.log(realMean);

if (realMean < 0.2) {
  showReportOfBadCourses();
} else if (realMean >= 0.2 && realMean < 0.8) {
  showReportOfOutLayerCourses();
} else if (realMean >= 0.8) {
  showReportOfBestCourses();
}`;
