// CLI quiz app about DO YOU KNOW ME comprising 6 questions at the moment

var readlineSync = require('readline-sync');
var player = readlineSync.question("what is your name?\n");
console.log("welcome " + player + " to Do You Know Vikas Quiz\n");

var score = 0;

//play function

function play(question, answer) {
  var userAns = readlineSync.question(question);
  if (userAns == answer) {
    score = score + 1;
    console.log("right answer !");

  } else {
    console.log("Wrong answer\n");
    console.log("correct answer is :" + answer);
  }
  console.log("score :"+score);
}

//array of objects
questions = [
  { question: "what is his birth year\n", answer: "2001" },
  { question: "what is his birth month name \n", answer: "september" },
  { question: "what is his birth date\n", answer: "30" },
  { question: "How Many siblings he have\n", answer: "1" },
  { question: "What is his favorite color\n", answer: "blue" },
  { question: "what college he is studying \n", answer: "IIT" },
]

for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}

console.log("final score is :" + score);
console.log("thanks for playing the game\n do send a screenshot of your score to us");

//final score print
