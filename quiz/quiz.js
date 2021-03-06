const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultForm = document.getElementById('form-result');

let countRightAnswers = 0; //1. let's count the right answers
let shuffledQuestions, currentQuestionIndex;
let currentQuestion = 1;


startButton.addEventListener('click', startGame);

nextButton.addEventListener('click', () => {
  document.getElementById('answer-buttons').classList.remove('no-click'); 

  currentQuestionIndex++; 
  setNextQuestion();

  currentQuestion++; 
  document.getElementById('current-question').innerHTML = currentQuestion;
})


function startGame() {
  console.log('started');

  document.getElementById('answer-buttons').classList.remove('no-click'); 

  startButton.classList.add('hide');
  resultForm.classList.add('hide');

  shuffledQuestions = questions.sort (() => Math.random() - 0.5) 
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();

  currentQuestion = 1;
  document.getElementById('current-question').innerHTML = currentQuestion;

  //3.  reset the counter after the test started 
  countRightAnswers = 0;

  document.getElementById('all-questions2').innerHTML = questions.length;
  document.getElementById('all-questions').innerHTML = questions.length; 
}


function setNextQuestion() {
  resetState(); 
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question; 
  question.answers.forEach(answer => {
    const button = document.createElement('button'); 
    button.innerText = answer.text;  
    button.classList.add('btn'); 
    if (answer.correct){ 
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button); 
  });
}


function resetState() {
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  })

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {

    resultForm.classList.remove('hide');
    questionContainerElement.classList.add('hide');

    startButton.innerText = 'Opnieuw'; 
    startButton.classList.remove('hide'); 
  }


  //2. if the answer is correct
  if (selectedButton.dataset = correct) {
    countRightAnswers++; //+1
  }

  //5. to show the score inside <span>
  document.getElementById('right-answers').innerHTML = countRightAnswers; 
  document.getElementById('answers-percent').innerHTML = ((100 * countRightAnswers)/questions.length).toFixed(0);
  //prevent multiclicking 
  document.getElementById('answer-buttons').classList.add('no-click'); 
}


function setStatusClass(element, correct) { 
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong')
  }
}


function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}


const questions = [
  {
    question: 'Welke van deze Leraren geven Wiskunde?',
    answers: [
      { text: 'Mascha', correct: true },
      { text: 'Ariane', correct: false },
      { text: 'Andre', correct: true },
      { text: 'Rianne', correct: false },
    ],

  },
  {
    question: 'Hoe vaak per week hebben wij sport?',
    answers: [
      { text: 'Elke donderdag', correct: false },
      { text: 'Elke dag', correct: true },
      { text: 'Om de week', correct: false },
      { text: 'Nooit', correct: false },
    ],
  },
  {
    question: 'Hoe heet onze directrice?',
    answers: [
      { text: 'Karin', correct: false },
      { text: 'Aafke', correct: false },
      { text: 'Camyre', correct: true },
      { text: 'Rianne', correct: false }
    ],
  },
  {
    question: 'Hoe laat start leerplein Rood?', 
    answers: [
      { text: 'Om 10 uur', correct: false },
      { text: 'om 8:30', correct: false },
      { text: 'om 9:30', correct: true },
      { text: 'om 9 uur', correct: false }
    ],
  },
  {
    question: 'In welke straat ligt Spring High?',
    answers: [
    {text: 'Herman Poortstraat', correct: true },
    {text: 'Burgemeester de Vlugt laan', correct: false },
    {text: 'Annie MG Schmidt straat', correct: false },
  ],
  },
    {
    question: 'Hoelang bestaat Springhigh?',
    answers: [
    {text: 'Drie jaar', correct: false },
    {text: 'Vier jaar', correct: false },
    {text: 'Vijf jaar', correct: true },
    {text: 'Zeven jaar', correct: false },
  ],
  },



  // {
  //   question: ' ',
  //   answers: [
  //     { text: ' ', correct: false },
  //     { text: ' ', correct: false },
  //     { text: ' ', correct: false },
  //     { text: ' ', correct: false },
  //   ]
  // },

  

  
]
