// variables to keep track of quiz state
var presentQuestionIndex = 0;
console.log(presentQuestionIndex);
//time left value here
// var time = ;
var timerId;
console.log(timerId);

// variables to reference DOM elements
var questionsEl = document.getElementById('questions');
console.log(questionsEl);
var timerEl = document.getElementById('timer');
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

function startQuiz() {
  //sets startScreenEl = to the value of startScreen ID.
  var startScreenEl = document.getElementById('start-screen');
  //sets startScreenEl = hide
  startScreenEl.setAttribute('class', 'hide');

  // sets questionEl = to the value of question ID.
  var questionsEl = document.getElementById('questions');
  // removes hide form questionsEl
  questionsEl.removeAttribute('class', 'hide');

  //sets timerId to repeatedly execute clockTick function every 1 second
  var timerId = setInterval(clockTick, 1000);

  timerId = 10;

  // Show starting time
  var timerEl = document.getElementById('time');
  timerEl.textContent = time;

  // Get question
  getQuestion();
}

function getQuestion() {
  // get current question object from array
  var presentQuestion = questionsEl[presentQuestionIndex];
  console.log(presentQuestion);

  // update title with current question
  var titleEl = document.getElementById('questions');
  titleEl.textContent = presentQuestion.title; //think dot notation

  // clear out any old question choices
  choicesEl.innerHTML = '';

  // loop over choices
  for (var i = 0; i < choicesEl.length; i++) {
    // create new button for each choice
    var choice = presentQuestion.choices[i];
    var choiceNode = document.createElement('');
    choiceNode.setAttribute('class', 'choice');
    choiceNode.setAttribute('value', choice);

    choiceNode.textContent = i + 1 + '. ' + choice;

    // display on the page
    choicesEl.appendChild();
  }
}

// function questionClick(event) {
//   var buttonEl = event.target;

//   // if the clicked element is not a choice button, do nothing.
//   if (!buttonEl.matches('.choice')) {
//     return;
//   }

//   // check if user guessed wrong
//   if () {

//     // penalize time

//     // display new time on page

//   // flash right/wrong feedback on page for half a second

//   // move to next question

//   // check if we've run out of questions or if time ran out?
//   if () {

//     //if it did ???

//   } else {

//     // if it didnt??
//   }
// }

// function quizEnd() {
//   // stop timer

//   // show end screen
//   var endScreenEl = document.getElementById('');
//   endScreenEl.removeAttribute('class');

//   // show final score
//   var finalScoreEl = document.getElementById('');
//   finalScoreEl.textContent = time;

//   // hide questions section
// }

// function clockTick() {
//   // update time
//   // decrement the variable we are using to track time
//   timerEl.textContent = ; // update out time

//   // check if user ran out of time
//   if (time <= 0) {
//     quizEnd();
//   }
// }

// function saveHighScore() {
//   // get value of input box
//   var initials = initialsEl.value.trim();

//   // make sure value wasn't empty
//   if () {

//     // get saved scores from localstorage, or if not any, set to empty array

//     var highScores =
//       JSON.parse() /* what would go inside the PARSE??*/ || [];

//     // format new score object for current user
//     var newScore = {
//       score: time,
//       initials: initials,
//     };

//     // save to localstorage
//     highScores.push(newScore);
//     window.localStorage.setItem('highScores', JSON.stringify(/* What would we put inside STRINGIFY? */));

//     // redirect to next page
//     window.location.href = '';
//   }
// }

// function checkForEnter(event) {
//   // "13" represents the enter key
//   if (event.key === 'Enter') {
//     saveHighScore();
//   }
// }

// // user clicks button to submit initials
// submitBtn.onclick = saveHighScore;

// // user clicks button to start quiz
startBtn.onclick = startQuiz;

// user clicks on element containing choices
// choicesEl.onclick = questionClick;

// initialsEl.onkeyup = checkForEnter;
