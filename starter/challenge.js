

var Question = function(question, answers, rightAnswer) {
  this.question = question
  this.answers = answers
  this.rightAnswer = rightAnswer



    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': '+ this.answers[i]);
    }
  var questionPrompt = prompt(this.question);

  console.log('Your answer ' + answers[questionPrompt] + ' is...');

  if (questionPrompt == this.rightAnswer) {
    console.log('Correct!');
  } else {
    console.log("Incorrect");
   }
}

//look up array randomization to find succint way to randomize interviewQuestions
// pull out main loop and make a second function. 

var question1 = new Question("How many letters are in my name?", [4, 7, 3], 1);
var question2 = new Question("How many world cups has brazil won?", [4, 5, 2], 1);
var question3 = new Question("Where in the world is Carmen...", ['Chile', 'Paris', 'San Diego'], 2);
var question4 = new Question("Who shot ya?", ['Biggie', 'Sug', '40'], 1);
var question5 = new Question("Who has never been to madrid?", ['Meek Milly', 'Snoop Dogg', 'Eazy-E', 'Drake'], 3);
var questionArray = [question1, question2, question3, question4, question5];

// var randomFunction = function() {
//
//
// function callQuestion() {
//   console.log(this.question);
//
//     for (var i = 0; i < this.answers.length; i++) {
//       console.log(i + ': '+ this.answers[i]);
//     }
//     var questionPrompt = prompt(this.question);
//
//     console.log('Your answer ' + answers[questionPrompt] + ' is...');
//
//     if (questionPrompt == this.rightAnswer) {
//       console.log('Correct!');
//     } else {
//       console.log("Incorrect");
//      }
// }
//
//
//
//
//
//   var randomNumber = Math.floor(Math.random() * questionArray.length);
//   console.log(randomNumber);
//   console.log(questionArray.length);
//   console.log(questionArray[randomNumber]);
//
//   return questionArray[randomNumber];
// }
//
// randomFunction()
