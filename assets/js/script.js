// store elements
var quizContainer = document.getElementById("quiz-container");
var quizQuestion = document.getElementById("quiz-question");

// create object to store question and answers
var qNaOne = {
  question: "Question 1: What is an Array?",
  answers: [
    "A long string of text",
    "A collection of items",
    "An ordered list of characters",
    "A beam of light",
  ],
  correcAnswer: "A collection of items",
};

var qNaTwo = {
  question: "Question 2: What's the difference between a function and method?",
  answers: [
    "A method is a built in function",
    "A function performs many while method performs one action",
    "A method describes what a function does",
    "There is no difference",
  ],
  correcAnswer: "A method is a built in function",
};

// fill in the first question
quizQuestion.textContent = qNaOne.question;

// fill in answers
// inspiration source: http://www.java2s.com/Tutorials/Javascript/Javascript_Element_How_to/UL/Create_ul_and_li_element.htm
var ul = document.getElementById("answers-ul");

function populateQnA(qNa) {
  for (var i = 0; i < qNa.answers.length; i++) {
    var li = document.createElement("li");
    li.textContent = qNa.answers[i];
    ul.appendChild(li);
  }
}

populateQnA(qNaOne);

// check to see if user selected the right answer
// store all li's in a variable, this will be an array of li elements
var answers = document.getElementById("answers-ul").getElementsByTagName("li");

for (var i = 0; i < answers.length; i++) {
  answers[i].addEventListener("click", function () {
    var userSelected = event.srcElement.innerText;
    // check if answer is correct
    if (userSelected == qNaOne.correcAnswer) {
      console.log("Correct!");
    } else {
      console.log("Wrong!");
    }
    // populate the next set of qna
    // TODO: NEED FUNCTION TO REPLACE LI NOT APPEND!!!!
    populateQnA(qNaTwo);
  });
}
