// list of all questions, choices, and answers
var questions = [
  {
    // title is a string property that will show the current question.
    title: 'Which of the following is a number?',
    //choices is an array property that hold four answer possibilities.
    choices: ['"4"', '"four"', 'four', '4'],
    // answers is an array property that holds the correct answer that is equal to the current question.
    answer: '4',
  },

  {
    title: 'Questions 2',
    choices: [
      'placeholder 1',
      'placeholder 2',
      'placeholder 3',
      'placeholder 4',
    ],

    answer: 'placeholder 2',
  },
  {
    title: 'Questions 3',
    choices: [
      'placeholder 1',
      'placeholder 2',
      'placeholder 3',
      'placeholder 4',
    ],
    answer: 'placeholder 3',
  },
  {
    title: 'Questions 4',
    choices: [
      'placeholder 1',
      'placeholder 2',
      'placeholder 3',
      'placeholder 4',
    ],
    answer: 'placeholder 4',
  },
  {
    title: 'Questions 5',
    choices: [
      'placeholder 1',
      'placeholder 2',
      'placeholder 3',
      'placeholder 4',
    ],
    answer: 'placeholder 1',
  },
  {
    title: 'Questions 7',
    choices: [
      'placeholder 1',
      'placeholder 2',
      'placeholder 3',
      'placeholder 4',
    ],
    answer: 'placeholder 2',
  },
];
console.log(questions);
var presentQuestionIndex = questions.length;
console.log(presentQuestionIndex);
