var readlineSync = require('readline-sync')
var score = 0;

var userName = readlineSync.question("What is your name? :")
console.log("Welcome to this game " + userName + ". Do you know Nachiket? Let's find out!")
console.log("----------Type everything in lower case----------")

var arr = [{
  question: "What is my Full Name? : ",
  answer: "nachiket shrikhande"
}, {
  question: "Where do I live? :",
  answer: "nagpur"
}, {
  question: "What is my Favourite color? :",
  answer: "blue"
}, {
  question: "What is my Favourite Food? :",
  answer: "dosa"
}, {
  question: "My Favourite superhero would be? :",
  answer: "ironman"
}]
for (var i = 0; i < arr.length; i++) {
  go(arr[i].question, arr[i].answer)
}

function go(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("Correct Answer")
    score++
  } else {
    console.log("Wrong Answer")
  }
  console.log("Current Score: ", score);
  console.log("-----------------------")
}

console.log("Your Score is " + score)
if (score < 3) {
  console.log("Nice Try " + userName + "! You can have a chat with me and get to Know me😊")
} else {
  console.log("Congratulations " + userName + "! You score is really good")
}