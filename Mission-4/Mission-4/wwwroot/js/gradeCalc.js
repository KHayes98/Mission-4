//function to hopefully make it all work
$("#submitGrade").onclick = getInput();

function getInput() {
    var assignmentValue = parseInt($("#assignmentInput").val());
    var projectValue = parseInt($("#projectInput").val());
    var quizzesValue = parseInt($("#quizzesInput").val());
    var midtermValue = parseInt($("#midtermInput").val());
    var finalValue = parseInt($("#finalInput").val());
    var intexValue = parseInt($("#intexInput").val());

    var finalGrade = assignmentValue + projectValue + quizzesValue + midtermValue + finalValue + intexValue;
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

    $("#gradeInsert").HTML(`final grade: ${letterGrade}`);

    alert("Function is functioning");
}


/*
 * 
//button to submit grades and return a letter grade
$("#submitGrade").click(function () {
    $("gradeInsert").innerHtml = letterGrade;
})

//calculation to determine final percentage
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

*/