var readlineSync = require('readline-sync');

var userName = readlineSync.question("what's your name? ")

 var welcomeMessage = "welcome " + userName;

 console.log(welcomeMessage);
console.log(" I am Vijay");

var readlineSync = require('readline-sync');
var score = 0;
var age = readlineSync.question("Guess my age I am 25 or not? :->");

console.log("You entered- " + age);

if (age === "no") {
  console.log("You are right ");
  score = score + 1;
  console.log("score is " + score);

}
else{
  console.log("You are worng");
  score = score - 1;
  console.log("score is" + score);
}



var food = readlineSync.question("What is my favourate food (chinese/indian):-->");

//var userfood = readlineSync.question(food);


if (food === "Indian") {
  console.log("you are right");
  score = score + 1;
  console.log("score is " + score);
}

else {
  console.log("you are worng");
score = score - 1;
console.log("score is " + score);
}

var location = readlineSync.question("where are you from?  ");
//var userlocation = readlineSync.question(location);
if (location === "Motihari"){
  console.log("I am from also Motihari  ");
  score = score + 1;
  console.log("score is " + score);

}
else{
  console.log("No, I have not visited there");
  score = score -1;
  console.log("score is " + score);
}
console.log("Thanku for giving some!time BYE....");