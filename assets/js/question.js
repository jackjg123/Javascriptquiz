// creates the questions object
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
    title: 'How can a variable be declared?',
    choices: ['var x = 5;', 'let x = 5;', 'const x = 5;', 'All the above'],
    answer: 'All the above',
  },
  {
    title: 'How can "var x= 5" be called and assigned a new value?',
    choices: ['var x = 7;', 'x = 7;', 'let x = 7;', 'const x = 7;'],
    answer: 'x = 7;',
  },
  {
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
    title: 'How is an example of setting an attribute?',
    choices: [
      ' pTags[0].AttributeSet("style", "font-size: 40px;")',
      ' pTags[0]set.Attribute("style", "font-size: 40px;")',
      ' pTags[0].setAttribute("style", "font-size: 40px;")',
      ' pTags[0]attribute.Set("style", "font-size: 40px;")',
    ],
    answer: 'pTags[0].setAttribute("style", "font-size: 40px;',
  },
];
console.log(questions);
var presentQuestionIndex = questions.length;
console.log(presentQuestionIndex);
