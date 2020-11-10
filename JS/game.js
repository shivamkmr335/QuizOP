console.log("Hello World");
const quest=document.getElementById("question");
const choices=Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);

let currentQuestion={};
let acceptingAnswers = false;
let score=0;
let questionCounter=0;
let avaliableQuestions=[];

let questions =[
    {
        question: "This is question no 1... do you know ??",
        choice1 : "this is choice1",
        choice2 : "this is choice2",
        choice3 : "this is choice3",
        choice4 : "this is choice4",
        answer: 2
    },
    {
        question: "This is question no twoo---... do you know ??",
        choice1 : "this is choice1 option",
        choice2 : "this is choice2 option",
        choice3 : "this is choice3 option",
        choice4 : "this is choice4 option",
        answer: 3
    },    
    {
        question: "This is question no threee... do you know ??",
        choice1 : "this is choice1",
        choice2 : "this is choice2",
        choice3 : "this is choice3",
        choice4 : "this is choice4",
        answer: 1
    },
    {
        question: "This is question no 4... do you know  the answer??",
        choice1 : "this is choice1",
        choice2 : "this is choice2",
        choice3 : "this is choice3",
        choice4 : "this is choice4",
        answer: 4
    }
]

//constants
const Correct_Marks = 10;
const Total_Questions = 3; //or use questions.length;

startGame = () =>{
    questionCounter=0;
    score=0;
    avaliableQuestions =[...questions];
    console.log(avaliableQuestions);
    getNewQuestion();
};

getNewQuestion = () =>{
    if(avaliableQuestions.length ==0 || questionCounter >= Total_Questions){
        console.log("Game Over");
        return window.location.assign("");
    }
    questionCounter++;
    //Creating a random number
    const QuesIndex = Math.floor(Math.random() * avaliableQuestions.length);
    currentQuestion = avaliableQuestions[QuesIndex];
    quest.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion['choice'+number];
    });

    //removing the used question from the arrray
    avaliableQuestions.splice(QuesIndex,1);  //Second argument 1 for removing one element from aur array
    acceptingAnswers=true;
};

choices.forEach( choice => {
    choice.addEventListener('click',e=>{
        if(acceptingAnswers==false) return;
        acceptingAnswers=true;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer);
        getNewQuestion();
    })
})

startGame();