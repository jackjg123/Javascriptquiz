var currentQuestionIndex = 0;
var timerId;

var questionEl = document.getElementById('questions');
var timerEl = document.getElementById('time');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var initialsEl = document.getElementById('initials');
var feedbackEl = document.getElementById('feedback');

function startQuiz() {
  var startScreenEl = document.getElementById('start-screen');
  startScreenEl.setAttribute('class', '');

  questionsEl.removeAttribute('class');

  timerId = setInterval(clockTick, 1000);

  timerEl.textContent = time;

  getQuestion();
}

function getQuestion() {

  var currentQuestion = questions[currentQuestionIndex];

  var titleEl = document.getElementById('questions-title');
  titleEl.textContent = "";
  
  choicesEl.innerHTML = "";

  for (var i = 0; i < ; i++) {
    var choice = currentQuestion.choices[i];
    var choiceNode = document.createElement('');
    choiceNode.setAttribute('class', 'choice');
    choiceNode.setAttribute('value', 'choice');

    choiceNode.textContent = i + 1 + ". " + choice;

    choicesEl.appendChild();
  }
} 

function questionClick(event) {
  var buttonEl = event.target;

  if (!buttonEl.matches('.choice')) {
    return;
  }

  if() {}
}




function quizEnd() {

  var endScreenEl = document.getElementById('end-screen');
  endScreenEl.removeAttribute('class');

  var finalScoreEl = document.getElementById('final-score');
  finalScoreEl.textContent = timerEl;


}

function saveHighscore() {

  var initials = initialsEl.value.trim();
//check if initials are empty
  if(initials !== '') {

    var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];

    var newScore = {
      score: time,
      initials: initials,
    };

    highscores.push(newScore);
    window.localStorage.setItem('highscores', JSON.stringify(highscores));

    window.location.href = '';


function checkForEnter(event) {
  if (event.key === 'Enter') {
    saveHighscore();
  }
}

submitBtn.onclick = saveHighscore;

startBtn.onclick = startQuiz;

choicesEl.onclick = questionClick;

initialsEl.onkeyup = checkForEnter;