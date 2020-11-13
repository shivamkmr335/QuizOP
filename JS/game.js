const quest=document.getElementById("question");
const choices=Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText=document.getElementById("questionCounter");
const scoreText=document.getElementById("score");

let currentQuestion={};
let acceptingAnswers = false;
let score=0;
let questionCounter=0;
let avaliableQuestions=[];

let questions =[
    {
        question: "This is question no 1... do you know ?? (2)",
        choice1 : "this is choice1",
        choice2 : "this is choice2",
        choice3 : "this is choice3",
        choice4 : "this is choice4",
        answer: 2    
    },
    {
        question: "This is question no twoo---... do you know ??  (3)",
        choice1 : "this is choice1 option",
        choice2 : "this is choice2 option",
        choice3 : "this is choice3 option",
        choice4 : "this is choice4 option",
        answer: 3
    },    
    {
        question: "This is question no threee... do you know ??(1)",
        choice1 : "this is choice1",
        choice2 : "this is choice2",
        choice3 : "this is choice3",
        choice4 : "this is choice4",
        answer: 1
    },
    {
        question: "This is question no 4... do you know  the answer??(4)",
        choice1 : "this is choice1",
        choice2 : "this is choice2",
        choice3 : "this is choice3",
        choice4 : "this is choice4",
        answer: 4
    }
]

//constants
const Marks_per_Correct = 10;
const Total_Questions = 4; //or use questions.length;

startGame = () =>{
    questionCounter=0;
    score=0;
    avaliableQuestions =[...questions];
    console.log(avaliableQuestions);
    getNewQuestion();
};

getNewQuestion = () =>{
    if(avaliableQuestions.length ==0 || questionCounter >= Total_Questions){
        localStorage.setItem('mostRecentScore',score);
        console.log("Game Over");
        return window.location.assign("../pages/end.html");
    }

    questionCounter++;
    questionCounterText.innerText = questionCounter + '/' + Total_Questions;

    //Creating a random number
    const QuesIndex = Math.floor(Math.random() * avaliableQuestions.length);
    currentQuestion = avaliableQuestions[QuesIndex];

    //Inserting New question into yhe array
    quest.innerText = currentQuestion.question;
    
    //Filling up options in the choices-container
    choices.forEach( choice => {
        const number = choice.dataset['number'];
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

        var classToApply = 'incorrect';
        if(selectedAnswer == currentQuestion.answer){
            classToApply = 'correct';
        }
        if(classToApply ==='correct'){
            incrementScore(Marks_per_Correct);
        }
        console.log(classToApply);

        //Adding this variable 'classToApply' as class to the parent of selected choice for applying CSS.
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(()=>{
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        },300);
    });
});

incrementScore = num =>{
    score += num;
    scoreText.innerText = score;
}
startGame();