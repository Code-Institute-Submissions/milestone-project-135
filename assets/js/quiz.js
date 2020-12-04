//Main source for code - Kevin Briggs YouTube Javascript tutorial - make a quiz https://www.youtube.com/watch?v=C7NsIRhoWuE 

function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;

//Sets the result to zero at the beginning of the quiz
    var correct = 0;

    //Increases user result by one point if correct answer is selected
    if (question1 == "1900") {
        correct++;
    }

    if (question2 == "Girls & Boys") {
        correct++;
    }

    if (question3 == "20 million") {
        correct++;
    }

    if (question4 == "Third") {
        correct++;
    }

//Reveals results
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct out of 4.";

}

//Refreshes the page so the user can start again with the score resetting to zero
var fullReset = document.getElementById('fullReset');

fullReset.addEventListener('click', function() {
    location.reload();
}, false);

// Sources of guidance used: 

//https://stackoverflow.com/questions/40371972/resetting-a-quiz-with-reset-button