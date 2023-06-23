// Array that holds the questions.
var questions = [
  {
    title: 'Which of the following is a number?',

    choices: ['"4"', '"four"', 'four', '4'],

    answer: '4',
  },

  {
    // Question 1
    title: 'Which of the following is correct?',
    choices: [
      'console.log(".document: ");',
      'console.log(window.document)',
      'console.log("body.document: ")',
      'log.console( document.body)',
    ],

    answer: 'console.log(window.document)',
  },

  {
    // Question 2
    title: 'What does DOM stand for?',
    choices: [
      'Document Object Module',
      'Document Object Modlet',
      'Document Object Model',
      'Domain Object Model',
    ],
    answer: 'Document Object Model',
  },

  {
    // Question 3
    title: 'How can a variable be declared?',
    choices: ['var x = 5;', 'let x = 5;', 'const x = 5;', 'All the above'],
    answer: 'All the above',
  },

  {
    // Question 4
    title: 'How can "var x= 5" be called and assigned a new value?',
    choices: ['var x = 7;', 'x = 7;', 'let x = 7;', 'const x = 7;'],
    answer: 'x = 7;',
  },

  {
    // Question 5
    title: 'How is an example of setting an attribute?',
    choices: [
      ' pTags[0].AttributeSet("style", "font-size: 40px;")',
      ' pTags[0]set.Attribute("style", "font-size: 40px;")',
      ' pTags[0].setAttribute("style", "font-size: 40px;")',
      ' pTags[0]attribute.Set("style", "font-size: 40px;")',
    ],
    answer: 'pTags[0].setAttribute("style", "font-size: 40px;',
  },

  {
    // Question 6
    title:
      'What is the object in the following statement: var time = {hour: 1};',
    choices: ['time', 'hour', '=', '1'],
    answer: 'time',
  },

  {
    // Question 7
    title:
      'What is the property value in the following statement: (var time = {hour: 1});',
    choices: ['time', '=', '', '1'],
    answer: '1',
  },
];
console.log(questions);
var presentQuestionIndex = questions.length;
console.log(presentQuestionIndex);
