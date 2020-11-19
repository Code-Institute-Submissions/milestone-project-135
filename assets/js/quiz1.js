function check(){

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 1;

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
    document.getElementById("number_correct").innerHTML = "You got" + correct + " correct.";
}

    var fullReset = document.getElementById('fullReset');

    fullReset.addEventListener('click', function() {
      location.reload();
    }, false);
















// var questions = [
//     {
//         prompt: "When did netball first begin in England?\n (a)1900\n (b)1950\n (c)2000",
//         answer: "a"
//     },
//     {
//         prompt: "Who can play netball?\n (a)boys\n (b)girls\n (c)boys and girls",
//         answer: "c"
//     },
//     {
//         prompt: "Where do people play netball across the world?\n (a)In 25 countries\n (b)In 55 countries\n (c)In 72 countries",
//         answer: "c"
//     },
// ]
// var score = 0;

// for(var i=0; i < questions.length; i++){
//     var response = window.prompt(questions[i].prompt);
//     if(response == questions[i].answer){
//         score ++;
//         alert("Correct!");
//     }else{
//         alert("Wrong!");
//     }
// }

// alert("You got" + score + "/" + questions.length)

// //https://www.youtube.com/watch?v=LQGTb112N_c