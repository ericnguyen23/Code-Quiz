// store elements
var quizContainer = document.getElementById("quiz-container");
var quizQuestion = document.getElementById("quiz-question");
var ul = document.getElementById("answers-ul");
var li = document.getElementsByTagName("li");
var answersArray = document
  .getElementById("answers-ul")
  .getElementsByTagName("li");

// create object to store question and answers
var qNa0 = {
  question: "Question 1: What is an Array?",
  answers: [
    "A long string of text",
    "A collection of items",
    "An ordered list of characters",
    "A beam of light",
  ],
  correcAnswer: "A collection of items",
};

var qNa1 = {
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
  question: "Question 3: fdsfd?",
  answers: ["xxxx", "zzzz", "aaaa", "bbbb"],
  correcAnswer: "bbbb",
};

// populate initial question
quizQuestion.textContent = qNa0.question;
// populate initial answers
// inspiration source: http://www.java2s.com/Tutorials/Javascript/Javascript_Element_How_to/UL/Create_ul_and_li_element.htm
function startQuiz() {
  for (var i = 0; i < qNa0.answers.length; i++) {
    var li = document.createElement("li");
    li.textContent = qNa0.answers[i];
    ul.appendChild(li);
  }
  checkAnswer(qNa0);
}

startQuiz();

// populate next question and answers
function populateNewQnA(qNaSet) {
  for (var i = 0; i < answersArray.length; i++) {
    answersArray[i].innerText = qNaSet.answers[i];
  }
  checkAnswer(qNaSet);
}

// check users  answers
function checkAnswer(qNaSet) {
  for (var i = 0; i < answersArray.length; i++) {
    answersArray[i].addEventListener("click", function () {
      var userSelected = event.srcElement.innerText;
      // check if answer is correct
      if (userSelected == qNaSet.correcAnswer) {
        console.log("Correct!");
      } else {
        console.log("Wrong!");
      }
      //  CONTINUE HERE!!!!!! NEED A WAY TO POPLATE NEXT SET OF QUESTIONS DYNAMICALLY
      populateNewQnA(qNa2);
    });
  }
}
