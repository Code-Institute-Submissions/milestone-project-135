var questions = [
    {
        prompt: "When did netball first begin in England?\n (a)1900\n (b)1950\n (c)2000",
        answer: "a"
    },
    {
        prompt: "Who can play netball?\n (a)boys\n (b)girls\n (c)boys and girls",
        answer: "c"
    },
    {
        prompt: "Where do people play netball across the world?\n (a)In 25 countries\n (b)In 55 countries\n (c)In 72 countries",
        answer: "c"
    },
]
var score = 0;

for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score ++;
        alert("Correct!");
    }else{
        alert("Wrong!");
    }
}

alert("You got" + score + "/" + questions.length)

//https://www.youtube.com/watch?v=LQGTb112N_c