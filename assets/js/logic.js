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
  var time = 15;
  var countdown;

  startBtn.addEventListener('click', startQuiz);

  function startQuiz() {
    document.getElementById('start-screen').classList.add('hide');
    document.getElementById()('questions').classList.remove('hide');

    startTimer();

    getQuestion();

  }


  // Function to start the timer
  function startTimer() {
    timerInterval = setInterval(function() {
    time--;
    timerElement.textContent = time;

    if (time <= 0) {
      endQuiz();
    }
  }, 1000);
  }      
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
    } else {
      feedbackEl.textContent = 'Wrong!';

      time -= 1;
    }

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

    var correctAnswers = 0;
    questions.forEach(function (question) {
      if (question.userChoice === question.answer) {
        correctAnswers++;
      }
      }
      // show end screen
      var endScreenEl = document.getElementById('end-screen');
      endScreenEl.classList.remove('hide');

      // show final score
      var finalScoreEl = document.getElementById('final-score');
      finalScoreEl.textContent = correctAnswers;

      // hide questions section
      questionsEl.classList.add('hide');
    });

    saveHighScore();
    // show end screen
    var endScreenEl = document.getElementById('end-screen');
    endScreenEl.classList.remove('hide');

    // show final score
    var finalScoreEl = document.getElementById('final-score');
    finalScoreEl.textContent = correctAnswers;

    // hide questions section
    questionsEl.classList.add('hide');
  }

  function saveHighScore() {
    var initials = initialsEl.value.trim();

    if (initials !== '') {
      var highScores =
        JSON.parse(window.localStorage.getItem(highScores)) || [];

      // format new score object for current user
      var newScore = {
        score: correctAnswers,
        initials: initials,
      };

      highScores.push('#final-score');

      window.localStorage.setItem('highScores', JSON.stringify(highScores));

      window.location.href = 'highScores.html';
    }
  }

  function checkForEnter(event) {
    if (event.key === 'Enter') {
      saveHighScore();
    }
  }

  // adds function to the buttons and enter key
  submitBtn.addEventListener('click', saveHighScore);
  startBtn.addEventListener('click', startQuiz);
  choicesEl.addEventListener('click', questionClick);
  initialsEl.addEventListener('keyup', checkForEnter);
});
