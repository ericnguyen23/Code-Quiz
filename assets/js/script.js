// store elements
var startButton = document.getElementById("start-button");
var quizContainer = document.getElementById("quiz-container");
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
  question: "Question 3: fdsfd?",
  answers: ["xxxx", "zzzz", "aaaa", "bbbb"],
  correcAnswer: "xxxx",
};

var qNa3 = {
  index: 3,
  question: "Question 4: fsdfdsaf jkldajflk djsa?",
  answers: ["qqqqq", "wwwww", "eeeee", "rrrrr"],
  correcAnswer: "qqqqq",
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

      if (element.matches("li") && elementTextContent === qNaSet.correcAnswer) {
        corrScore++;
        console.log("correct: " + corrScore + " wrong :" + wrongScore);
        populateNewAnswers(window[newSetName]);
        populateNewQ(window[newSetName]);
      } else if (
        element.matches("li") &&
        elementTextContent !== qNaSet.correcAnswer
      ) {
        wrongScore++;
        console.log("correct: " + corrScore + " wrong :" + wrongScore);
        populateNewAnswers(window[newSetName]);
        populateNewQ(window[newSetName]);
      } else {
        console.log("not a list item");
      }
    },
    { once: true }
  );
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

startQuiz();
