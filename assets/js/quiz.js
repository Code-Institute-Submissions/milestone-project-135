function check(){

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;

    if (question1 == "1900"){
        correct++;
    }
    
    if (question2 == "Girls & Boys"){
        correct++;
    }
    
    if (question3 == "20 million"){
        correct++;
    }
    
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";

}

    var fullReset = document.getElementById('fullReset');

    fullReset.addEventListener('click', function() {
      location.reload();
    }, false);



