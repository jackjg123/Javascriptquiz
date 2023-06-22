document.addEventListener('DOMContentLoaded', function () {
  var questionsEl = document.getElementById('questions');
  console.log(questionsEl);
  var timerEl = document.getElementById('time');
  console.log(timerEl);
  var choicesEl = document.getElementById('choices');
  console.log(choicesEl);
  var submitBtn = document.getElementById('submit');
  console.log(submitBtn);
  var startBtn = document.getElementById('start');
  console.log(startBtn);
  var initialsEl = document.getElementById('initials');
  console.log(initialsEl);
  var feedbackEl = document.getElementById('feedback');

  var presentQuestionIndex = 0;
  console.log(presentQuestionIndex);
  var time = 10;
  var countdown;

  function startQuiz() {
    var startScreenEl = document.getElementById('start-screen');
    startScreenEl.setAttribute('class', 'hide');

    questionsEl.removeAttribute('class', 'hide');

    countdown = setInterval(function () {
      updateTimerDisplay();
      time--;
      if (time <= 0) {
        clearInterval(countdown);
        quizEnd();
      }
    }, 1000);

    function updateTimerDisplay() {
      timerEl.textContent = 'Time: ' + time;
    }

    getQuestion();
  }

  function getQuestion() {
    var presentQuestion = questions[presentQuestionIndex];

    var titleEl = document.getElementById('question-title');
    titleEl.textContent = presentQuestion.title;

    choicesEl.innerHTML = '';

    presentQuestion.choices.forEach(function (choice, index) {
      var choiceNode = document.createElement('button');
      choiceNode.setAttribute('class', 'choice');
      choiceNode.setAttribute('value', index);
      choiceNode.textContent = index + 1 + '. ' + choice;
      choicesEl.appendChild(choiceNode);
    });
  }

  function questionClick(event) {
    var buttonEl = event.target;

    if (!buttonEl.matches('.choice')) {
      return;
    }

    var selectedChoice = parseInt(buttonEl.getAttribute('value'));

    var currentQuestion = questions[presentQuestionIndex];

    if (selectedChoice === currentQuestion.answer) {
      feedbackEl.textContent = 'Correct!';
    }
    if (selectedChoice !== currentQuestion.answer) {
      feedbackEl.textContent = 'Wrong!';
      time -= 10;
    } else
      setTimeout(function () {
        feedbackEl.textContent = '';
      }, 1000);

    presentQuestionIndex++;
    if (presentQuestionIndex >= questions.length || time <= 0) {
      quizEnd();
    } else {
      getQuestion();
    }
  }

  function quizEnd() {
    // stop timer
    clearInterval(countdown);
    // show end screen
    var endScreenEl = document.getElementById('end-screen');
    endScreenEl.classList.remove('hide');

    // show final score
    var finalScoreEl = document.getElementById('final-score');
    finalScoreEl.textContent = time;

    // hide questions section
    questionsEl.classList.add('hide');
  }

  function saveHighScore() {
    // get value of input box
    var initials = initialsEl.value.trim();

    // make sure value wasn't empty
    if (initials !== '') {
      var highScores =
        JSON.parse(window.localStorage.getItem(highScores)) || [];

      // format new score object for current user
      var newScore = {
        score: time,
        initials: initials,
      };

      //     // save to localstorage
      highScores.push(newScore);
      window.localStorage.setItem('highScores', JSON.stringify(highScores));

      // redirect to next page
      window.location.href = 'highScores.html';
    }
  }

  function checkForEnter(event) {
    //   // "13" represents the enter key
    if (event.key === 'Enter') {
      saveHighScore();
    }
  }
  // user clicks button to submit initials
  submitBtn.addEventListener('click', saveHighScore);

  // // user clicks button to start quiz
  startBtn.addEventListener('click', startQuiz);

  // user clicks on element containing choices
  choicesEl.addEventListener('click', questionClick);

  initialsEl.addEventListener('keyup', checkForEnter);
});
