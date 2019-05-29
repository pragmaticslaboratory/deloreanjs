export default `//helper functions

function showReportOfBadCourses() {
    show("Showing bad courses");
}

function showReportOfOutLayerCourses() {
    show("Showing outlayer courses");
}

function showReportOfBestCourses() {
    show("Showing best courses");
}

function show(x) {
    console.log(x);
}

// helper functions

universityMean = 5.0;
maximumMean = 7.0;

delorean.watch(['realMean']);

realMean = universityMean/maximumMean;

delorean.insertTimepoint('testingDifferentResults');

show(realMean);

if (realMean < 0.2) {
	showReportOfBadCourses();
} else if (realMean >= 0.2 && realMean < 0.8) {
	showReportOfOutLayerCourses();
} else if (realMean >= 0.8) {
	showReportOfBestCourses();
}`
