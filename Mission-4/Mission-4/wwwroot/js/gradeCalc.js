var assignmentValue = parseInt($("#assignmentInput").value);
var projectValue = parseInt($("#projectInput").value);
var quizzesValue = parseInt($("#quizzesInput").value);
var midtermValue = parseInt($("#midtermInput").value);
var finalValue = parseInt($("#finalInput").value);
var intexValue = parseInt($("#intexInput").value);


$("#submitGrade").click(function () {
    alert("Value: " + assignmentValue)
})

var finalGrade = $("#assignmentInput").value + $("#projectInput").value + $("#quizzesInput").value + $("#midtermInput").value + $("#finalInput").value + $("#intexInput").value;
var letterGrade = "";


//sequence to determine the letter grade
if (finalGrade >= 94) {
    letterGrade = "A";
}
else if (finalGrade >= 90 && finalGrade < 94) {
    letterGrade = "A-";
}
else if (finalGrade >= 87 && finalGrade < 90) {
    letterGrade = "B+";
}
else if (finalGrade >= 84 && finalGrade < 87) {
    letterGrade = "B";
}
else if (finalGrade >= 80 && finalGrade < 84) {
    letterGrade = "B-";
}
else if (finalGrade >= 77 && finalGrade < 80) {
    letterGrade = "C+";
}
else if (finalGrade >= 74 && finalGrade < 77) {
    letterGrade = "C";
}
else if (finalGrade >= 70 && finalGrade < 74) {
    letterGrade = "C-";
}
else if (finalGrade >= 67 && finalGrade < 70) {
    letterGrade = "D+";
}
else if (finalGrade >= 64 && finalGrade < 67) {
    letterGrade = "D";
}
else if (finalGrade >= 60 && finalGrade < 64) {
    letterGrade = "D-";
}
else {
    letterGrade = "E";
}