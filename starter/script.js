// FUnction Constructor
/*
var john = {
  name: 'John',
  birthYear: 1972,
  job: 'Teacher'
};

var Person= function(name, birthYear, job) {
  this.name = name;
  this.birthYear = birthYear;
  this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2018 - this.birthYear);
  }

Person.prototype.lastName = 'Smith'



var john = new Person('John', 1962, 'Teacher');
var charlotte = new Person('Charlotte', 1992, 'Stripper');
var ryan = new Person('Ryan', 1983, 'Hitman');


john.calculateAge()
charlotte.calculateAge()
ryan.calculateAge()

console.log(john.lastName);
console.log(charlotte.lastName);
console.log(ryan.lastName);
*/

//Object.create method
/*
var personProto = {
  calculateAge: function() {
    console.log(2018 - this.birthYear);
  }
};

var john = Object.create(personProto);

john.name = 'John'
john.birthYear = 1987
john.job = "Designer"

var jane = Object.create(personProto, {
  name: {value: 'Jane'},
  birthYear: {value: 1972},
  job: {value: 'Designer'}
})
*/

/*
// Primitives vs Objects

//Primitives
var a = 1;
var b = a;
a = 56;
console.log(a);
console.log(b);

//Objects
var obj1 = {
  name: 'john',
  age: 26
}

var obj2 = obj1
obj1.age = 32
console.log(obj1);
console.log(obj2);

//Functions
var age = 22;
var obj = {
  name: 'Chin',
  city: 'Atlanta'
}

function change(a,b) {
  a = 30;
  b.city = 'Accra';
}

change(age, obj);
console.log(age);
console.log(obj);
*/

/*
Lecture: Passing functions as arguments



var years = [1990, 1995, 2000, 1937, 2016]

function arrayCalc(arr, fn) {
  var arrResult = []
  for (var i = 0; i < arr.length; i++) {
    arrResult.push(fn(arr[i]));
  }
  return arrResult;
}

function calculateAge(element) {
  return 2018 - element;
}

function isFullAge(element) {
  return element >= 18;
}

function maxHeartRate(element) {
  if (element >= 18 && element <= 81) {
      return Math.round(206.9 - (0.67 * element));
  } else {
    return "could not be calculated"
  }
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var heartRate = arrayCalc(ages, maxHeartRate)
console.log(heartRate);
*/

/*
Functions returning Functions


function interviewQuestions(job) {
  if(job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what ux design is?');
    }
  } else if(job === 'teacher') {
    return function(name) {
      console.log('What subject do you teach, ' + name + '?');
    }
  } else {
    return function(name) {
      console.log('Hello, ' + name + '. Can you plese tell me what a ' + job + ' does?');
    }
  }
}

//Returned functions can be treated like storing a function expression in a variable
var teacherQuestion = interviewQuestions('teacher');

teacherQuestion('Jane')

var roadManTing = interviewQuestions('roadman')
roadManTing('Ryan')

//Because they are evaluated from left to right there is no need to store them in a variable
//See below for example
interviewQuestions('designer')('Mark')

*/
/*
// Lecture: IIFE Immediately Ivoke Function expression

function game() {
  var score = Math.random() * 10;
  console.log(score >= 10);
}
game();

// IIFE's must be wrapped in parentheses and they also create data privacy
(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);
//variables in the IIFE can not be logged/called because they are outta scope
//Arguments can be passed in the IIFE's
//the parentheses invocation at the end is where you pass the argument
*/

/*
// Function Closures

function retirement(retirementAge) {
  var a = "years until retirement";
  return function(yearOfBirth) {
    var age = 2018 - yearOfBirth
    console.log((retirementAge - age) + a);
  };
}

var usRetirement = retirement(66);
var germanyRetirement = retirement(65);
var finlandRetirement = retirement(67);

usRetirement(1990);
germanyRetirement(1990);
finlandRetirement(1990);
retirement(66)(1990);

function interviewQuestions(job) {
 return function(name) {
  if(job === 'designer') {
      console.log(name + ', can you please explain what ux design is?');
    } else if(job === 'teacher') {
      console.log('What subject do you teach, ' + name + '?');
    } else {
      console.log('Hello, ' + name + '. Can you plese tell me what a ' + job + ' does?');
    }
  }
}
interviewQuestions('designer')('Chin')
*/

///////////////////////
// BIND, CALL, & APPLY

var johan = {
  name: 'Johan',
  age: 27,
  job: 'footballer',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log('What a great ' + timeOfDay + ' ladies and gentlemen. My name is ' + this.name + ' and I am a ' + this.job + '. Im ' + this.age + ' years old.');
    } else if (style === 'friendly') {
      console.log('What up peeps! How y\'all feelin this ' + timeOfDay + ' ?? My name is ' + this.name + ' and I am a ' + this.job + '. I\'m ' + this.age + ' years old. Wooo!');
    }
  }
}

var emily = {
  name: 'Em',
  age: 32,
  job: 'designer'
}

johan.presentation('formal', 'morning');

// the first argumetn in the Call sets the 'this' variable
johan.presentation.call(emily, 'friendly', 'night')


//Apply funciton will not work here because we are not expecting an array.
// Apply is same as call except the 2nd argument is an arrayCalc
// john.presentation.apply(emily, ['friendly', 'morning'])


//currying is a technique in which we create a funciton that is based on another function with some preset parameters

var johanFriendly = johan.presentation.bind(johan, 'friendly');

johanFriendly('day')
johanFriendly('morning')

var emilyFormal = johan.presentation.bind(emily, 'formal')

emilyFormal('night')







var years = [1990, 1995, 2000, 1937, 2002]

function arrayCalc(arr, fn) {
  var arrResult = []
  for (var i = 0; i < arr.length; i++) {
    arrResult.push(fn(arr[i]));
  }
  return arrResult;
}

function calculateAge(element) {
  return 2018 - element;
}

function isFullAge(limit, element) {
  return element >= limit;
}


var ages = arrayCalc(years, calculateAge);

var usFullAge = arrayCalc(ages, isFullAge.bind(this, 21));
console.log(ages);
console.log(usFullAge);
