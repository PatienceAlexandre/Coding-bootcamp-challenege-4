var questionIndex = 0
var time = 60
var timerId;

var questionsEl = document.getElementById("questions")
var timerEl = document.getElementById("time")
// var choiceEl = document.getElementById("choices")
var submitBtn = document.getElementById("submit")
var startBtn = document.getElementById("start")
var initialsEl = document.getElementById("initials")
var feedbackEl = document.getElementById("feedback")
var questionTxt = document.getElementById('questiontitle')
var sfxRight = new Audio("sfx/correct.wav")
var sfxWrong = new Audio("sfx/incorrect.wav")

function startQuiz(){
  var startscreenEl = document.getElementById("startscreen")
  startscreenEl.setAttribute("class","hide")
  questionsEl.removeAttribute("class")
  timerId = setInterval(countdown, 1000)
  timerEl.textContent = time
  getQuestion()
}

function countdown(){
  time--
  timerEl.textContent = time 
  if(time<=0){
    endQuiz()
  }
}

function getQuestion(){
  var currentQuestion = questions[questionIndex]
  var titleEl = document.getElementById("questiontitle")
  titleEl.textContent = currentQuestion.title 

  for (let i = 0; i < currentQuestion.choices.length; i++) {
    var choiceEl = document.getElementById("choice-" + i);
    choiceEl.textContent = currentQuestion.choices[i]
  }

}

function checkAnswer(event){
  varlineBreak = document.getElementById('lineBreak');
  lineBreak.style.display ='block';
  answerCheck.style.display ='block';
  //determine which answer button the user clicked
  event.target.textContent

  //if the user clicks the right answer correct.wav plays
  correctAns++;
  answerCheck.textContent ='Correct!';
  function playCorrectSound(){
    const correctSound = document.getElementById('correct.wav');
    correctSound.play();
  }
  
  {
  // if the user clicks the wrong answer incorrect.wav plays
  answerCheck.textcontent ='Wrong!The correct answer was:' + question[questionIndex].answer;
  const incorrectSound = document.getElementById('incorrect.wav');
  incorrectSound.play();
  }

}

  //increment questionIndex
  function nextQuestion(){
    questionTxt.textContent = questions[questionIndex].question;
    choiceA.textContent = question[quetionIndex].choices[0];
    choiceB.textContent = question[questionIndex].choices[1];
    choiceC.textContent = question[questionIndex].choices[2];
    choiceD.textContent = question[questionIndex].choices[3];
  }

  //call getQuestion to show the next question
  function showQuiz(){
    nextQuestion();
  }

  function getQuestion(){
    questionTxt.textContent = questions [questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
  }

//add clickevent to all btns
document.getElementById("choice-0").addEventListener("click", checkAnswer);
document.getElementById("choice-1").addEventListener("click", checkAnswer);
document.getElementById("choice-2").addEventListener("click", checkAnswer);
document.getElementById("choice-3").addEventListener("click", checkAnswer);
//ues a for loop to populate all the choices into the element.
// This function would allow the user to choose an aswer. 
if (questionIndex <  questions.length){
  nextQuestion();
}else{

  endQuiz();

}

function chooseA(){checkAnswer(0);}
function chooseB(){checkAnswer(1);}
function chooseC(){checkAnswer(2);}
function chooseD(){checkAnswer(3);}

//This function is the end page screen that displays you
function endQuiz(){
  summary.style.display = 'block';
  questionsDiv.style.display = 'none';
  startDiv.style.display = 'none';
  timerEl.style.display = 'none';
  timesUp.style.display = 'block';

finalScore.textContent =correctAns;
}
//this function allows you to enter your initials for your high score to save
