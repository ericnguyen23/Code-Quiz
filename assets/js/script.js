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
  index: 0,
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
  correcAnswer: "bbbb",
};

var qNa3 = {
  index: 3,
  question: "Question 4: fsdfdsaf jkldajflk djsa?",
  answers: ["qqqqq", "wwwww", "eeeee", "rrrrr"],
  correcAnswer: "qqqqq",
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

// check users  answers
function checkAnswer(qNaSet) {
  for (var i = 0; i < answersArray.length; i++) {
    answersArray[i].addEventListener("click", function () {
      // set vars to dynamically set name, referring to qNa Object, which will then populate new qNa appropriately
      var indexNum = qNaSet.index + 1;
      var stringIndexNum = indexNum.toString();
      var newSetName = "qNa" + stringIndexNum;

      var userSelected = event.srcElement.innerText;
      // check if answer is correct
      if (userSelected == qNaSet.correcAnswer) {
        console.log("Correct!");
        populateNewQnA(window[newSetName]);
      } else {
        console.log("Wrong!");
        populateNewQnA(window[newSetName]);
      }
    });
  }
}

// populate next question and answers
function populateNewQnA(qNaSet) {
  for (var i = 0; i < answersArray.length; i++) {
    answersArray[i].innerText = qNaSet.answers[i];
  }
  checkAnswer(qNaSet);
}

startQuiz();
