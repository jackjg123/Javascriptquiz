// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = 60;
var timerId;
// variables to reference DOM elements
var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById('time');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var initialsEl = document.getElementById('initials');
var feedbackEl = document.getElementById('feedback');
var startScreenEl = document.getElementById('start-screen');
var titleEl = document.getElementById('question-title');
var choiceNode; // Will be used inside the loop
var endScreenEl = document.getElementById('end-screen');
var finalScoreEl = document.getElementById('final-score');

function startQuiz() {
  startScreenEl.setAttribute('class', 'hide');
  questionsEl.removeAttribute('class');
  timerId = setInterval(clockTick, 1000);
  timerEl.textContent = time;
  getQuestion();
}

function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  titleEl.textContent = currentQuestion.title;
  choicesEl.innerHTML = '';

  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var choice = currentQuestion.choices[i];
    choiceNode = document.createElement('button');
    choiceNode.setAttribute('class', 'choice');
    choiceNode.setAttribute('value', choice);
    choiceNode.textContent = i + 1 + '. ' + choice;
    choicesEl.appendChild(choiceNode);
  }
}

function questionClick(event) {
  var buttonEl = event.target;

  if (!buttonEl.matches('.choice')) {
    return;
  }

  var selectedChoice = buttonEl.getAttribute('value');

  if (selectedChoice === questions[currentQuestionIndex].answer) {
    feedbackEl.textContent = 'Correct!';
  } else {
    feedbackEl.textContent = 'Wrong!';
    time -= 20;
    if (time < 0) {
      time = 0;
    }
    timerEl.textContent = time;
  }

  feedbackEl.setAttribute('class', 'feedback');
  setTimeout(function () {
    feedbackEl.setAttribute('class', 'feedback hide');
  }, 1000);

  currentQuestionIndex++;

  if (currentQuestionIndex === questions.length || time === 0) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  clearInterval(timerId); // Stop the timer
  questionsEl.setAttribute('class', 'hide'); // Hide the questions
  endScreenEl.removeAttribute('class'); // Show the end screen
  finalScoreEl.textContent = time; // Display the final score
}

function clockTick() {
  time--;
  timerEl.textContent = time;

  if (time <= 0) {
    quizEnd();
  }
}

function saveHighscore() {
  var initials = initialsEl.value.trim();

  if (initials !== '') {
    var highScores =
      JSON.parse(window.localStorage.getItem('highScores')) || [];
    var newScore = {
      score: time,
      initials: initials,
    };

    highScores.push(newScore);
    console.log(
      '🚀 ~ file: logic.js:104 ~ saveHighscore ~ newScore:',
      newScore
    );
    window.localStorage.setItem('highScores', JSON.stringify(highScores));

    initialsEl.value = ''; // Clear the input field after saving the high score
  }
}

function checkForEnter(event) {
  if (event.key === 'Enter') {
    saveHighscore(newScore);
  }
}

submitBtn.onclick = saveHighscore;
startBtn.onclick = startQuiz;
choicesEl.onclick = questionClick;
initialsEl.addEventListener('keyup', checkForEnter);

submitBtn.onclick = saveHighscore;
startBtn.onclick = startQuiz;
choicesEl.onclick = questionClick;
initialsEl.onkeyup = checkForEnter;
