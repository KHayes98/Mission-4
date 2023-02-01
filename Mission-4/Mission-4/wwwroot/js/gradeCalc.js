//function to hopefully make it all work
$("#submitGrade").click(function () {
    var assignmentValue = $("#assignmentInput").val() * 0.5;
    var projectValue = $("#projectInput").val() * 0.1;
    var quizzesValue = $("#quizzesInput").val() * 0.1;
    var midtermValue = $("#midtermInput").val() * 0.1;
    var finalValue = $("#finalInput").val() * 0.1;
    var intexValue = $("#intexInput").val() * 0.1;

    let finalGrade = 0;
    finalGrade = assignmentValue + projectValue + quizzesValue + midtermValue + finalValue + intexValue;
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


    //output final grade
    $("#gradeInsert").html(`final grade: ${letterGrade}`);
});