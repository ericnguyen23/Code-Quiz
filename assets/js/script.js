// store elements
var startButton = document.getElementById("start-button");
var quizContainer = document.getElementById("quiz-container");
var completeSection = document.getElementById("complete-section");
var quizQuestion = document.getElementById("quiz-question");
var ul = document.getElementById("answers-ul");
var li = document.getElementsByTagName("li");
var answersArray = document
  .getElementById("answers-ul")
  .getElementsByTagName("li");

// store scores
var corrScore = 0;
var wrongScore = 0;

// create object to store question and answers
var qNa0 = {
  index: 0,
  question: "Question 1: What is an Array?",
  answers: [
    "A collection of items",
    "A long string of text",
    "An ordered list of characters",
    "A beam of light",
  ],
  correcAnswer: "A collection of items",
};

var qNa1 = {
  index: 1,
  question: "Question 2: What's the difference between a function and method?",
  answers: [
    "A method is a built in function",
    "A function performs many while method performs one action",
    "A method describes what a function does",
    "There is no difference",
  ],
  correcAnswer: "A method is a built in function",
};

var qNa2 = {
  index: 2,
  question: "Question 3: What does CSS stand for?",
  answers: [
    "Cascading Style Sheet",
    "Create Systematic Styles",
    "Code Service Syntax",
    "Can Someone See",
  ],
  correcAnswer: "Cascading Style Sheet",
};

var qNa3 = {
  index: 3,
  question: "Question 4: How is JavaScript different from CSS?",
  answers: [
    "JavaScript adds functionality",
    "JavaScript styles code",
    "JavaScript requires no coding language",
    "JavaScript is easier to learn",
  ],
  correcAnswer: "JavaScript adds functionality",
};

var qNa4 = {
  index: 4,
  question: "",
  answers: [],
  correcAnswer: "",
  lastQ: true,
};

// populate initial question
quizQuestion.textContent = qNa0.question;
function startQuiz() {
  // hide opening section and show first question
  startButton.addEventListener("click", function () {
    quizContainer.classList.remove("hidden");
  });

  // populate initial answers
  for (var i = 0; i < qNa0.answers.length; i++) {
    var li = document.createElement("li");
    li.textContent = qNa0.answers[i];
    ul.appendChild(li);
  }
  // check first question
  checkForClickAndAnswer(qNa0);
}

// check for clicks and correct answer
function checkForClickAndAnswer(qNaSet) {
  // if not last set of questions, run
  if (qNaSet.lastQ !== true) {
    ul.addEventListener(
      "click",
      function () {
        // set event vars
        var element = event.target;
        var elementTextContent = element.innerText;

        // set vars to dynamically set name, referring to qNa Object, which will then populate new qNa appropriately
        var indexNum = qNaSet.index + 1;
        var stringIndexNum = indexNum.toString();
        var newSetName = "qNa" + stringIndexNum;

        var currSetName = "qNa" + qNaSet.index;

        if (
          element.matches("li") &&
          elementTextContent === qNaSet.correcAnswer
        ) {
          corrScore++;
          populateNewAnswers(window[newSetName]);
          populateNewQ(window[newSetName]);
        } else if (
          element.matches("li") &&
          elementTextContent !== qNaSet.correcAnswer
        ) {
          wrongScore++;
          populateNewAnswers(window[newSetName]);
          populateNewQ(window[newSetName]);
        } else {
          // if li is not clicked re populate the current set of answers
          populateNewAnswers(window[currSetName]);
        }
      },
      { once: true }
    );
  } else {
    completeSection.classList.remove("hidden");
    generateComplete();
  }
}

// populate next question
function populateNewQ(qNaSet) {
  quizQuestion.textContent = qNaSet.question;
}

// populate next set of answers
function populateNewAnswers(qNaSet) {
  for (var i = 0; i < answersArray.length; i++) {
    answersArray[i].innerText = qNaSet.answers[i];
  }
  checkForClickAndAnswer(qNaSet);
}

// generate completed screen content
function generateComplete() {
  // create new elements
  var completeHeader = document.createElement("h1");
  var completeSecondaryHeader = document.createElement("h2");
  var corrScoreText = document.createElement("p");
  var wrongScoreText = document.createElement("p");
  var completeImage = document.createElement("img");

  // setting content for elements
  completeHeader.textContent = "Congratulations on completing this quiz!";
  completeSecondaryHeader.textContent = "Here are your results:";
  corrScoreText.textContent = "Correct: " + corrScore;
  wrongScoreText.textContent = "Incorrect: " + wrongScore;

  // set appropriate image based on users score
  var percentage = corrScore / (wrongScore + corrScore);
  if (percentage >= 0.75) {
    completeImage.setAttribute(
      "src",
      "https://media.giphy.com/media/o75ajIFH0QnQC3nCeD/giphy.gif"
    );
  } else {
    completeImage.setAttribute(
      "src",
      "https://media.giphy.com/media/y9gcCOXpNX8UfZrp0X/giphy.gif"
    );
  }

  // Add elements to the DOM
  completeSection.appendChild(completeHeader);
  completeSection.appendChild(completeSecondaryHeader);
  completeSection.appendChild(corrScoreText);
  completeSection.appendChild(wrongScoreText);
  completeSection.appendChild(completeImage);
}

startQuiz();
