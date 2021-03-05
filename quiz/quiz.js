const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const uitslagbutton = document.getElementById('uitslag-btn')
const uitslagelement = document.getElementById('uitslag-text')
const controlelement = document.getElementById('controls')
const countbutton = document.getElementById('count')

var count = 0;

let shuffledQuestions, currentQuestionIndex

//these are the buttons
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
uitslagbutton.addEventListener('click', uitslag)
countbutton.addEventListener('click', counter)

//starts game 
function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  controlelement.classList.add('hide')
}
//kiest een random vraag
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}
//zet de vraag in de quiz
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}
//Kekw
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}
//welke vraag hoort bij welk antwoord
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    uitslagbutton.classList.remove('hide')
  }
}
//is een vraag goed of fout
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


function uitslag () {
    uitslagbutton.classList.add('hide')
    questionElement.classList.add('hide')
    questionContainerElement.classList.add('hide')
    uitslagelement.classlist.remove('hide')
}

function counter () {
  if (count = 0 ) {
    alert("Hello World");
  }
}





//de vragen en antwoorden
//en tips maar daar moet nog aan gewerkt worden

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
]
