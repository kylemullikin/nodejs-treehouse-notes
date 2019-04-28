// below is "introducing 'functions' in js"
// function syntax is kinda like declaring a variable
var goToCoffeeShop = Math.floor(Math.random() * 6) + 1;

//  var goToCoffeeShop = Math.floor(Math.random() * 6) + 1;  may not always apply to some functions?


function goToCoffeeShop() {
  alert('i got you an Espreso sir!');
}
goToCoffeeShop(); //this is how to "call" the function

 /* i can call it as many times as i want to
 call, execute, run , etc... all mean the same thing.*/

// i can run muliple lines of "code" w/one function

/* a function expression allows me to
assign(store) a function to a variable*/

// below is functions
//functions definition : a procedure that you can run/call/exacute an unlimited amount of times


function energySource() {
  console.log("what is the best energy drink?");
  alert('Rockstar energy drinks are the best');
} // or you can use an "alert" , or , "document.write" instead of "console.log"
  energySource();

// below is more basic functions examples

var playSims4 = Math.floor(Math.random() * 4) + 1;

function playSims4() {
  console.log('Sims is my favorite game to play');// now i will add an 'else' statement
} else {  // this else statement may not even work just so you know.
  console.log('wd2 is my other favorite');
}
playsims4();







//ex 2
var getRandomNumber = Math.floor(Math.random() * 10) + 1;

function randomNumberGenerator() {
  console.log("congradulations"); // add an alert();
}
getRandomNumber();

// ex 3 "random day generator"
var getRandomDay = Math.floor(Math.random() * "friday") + "monday"; // day's could be added wrongly?
function randomWeekDays() {
  document.write(" let us hope this program/function works properly");
}
getRandomDay();

//ex 4
var selectAction = Math.floor(Math.random() * "kill or") + "bail?";

function killOrBail() {
  console.log("the choice is yours alone. make a decision");
}
killOrBail();

//ex 5


// what is the purpose of using a js function?
// response is in the below comment:

// functions are used to seperate out sections of code with instructions to perform a specific task

function favjavascriptCode() {
  console.log("functions are my obsesssion/favorite");
  alert("i am obsessed with javascript 'Functions ' quite badly but have no idea why");
}

function sayHi() {
  console.log(" hello world!")
  //outputs hello world!
} //or : "alert() or document.write("")" but i chose console.log()


//below is "GETTING" information froma function
function getMeCoffee() {
  return "espresso is on the way";
}
alert(getMeCoffee()); //or console.log() , or in a variable

function getRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  //alert(randomNumber);// use the "return" keyword below to do whatever i want w/it(document.write etc..)
  return randomNumber; //used if i want it(function) to return something afterwords
}
alert(getRandomNumber()); // or console.log? or store it in a variable. either on works.

// below is "getting information" practice functions

function findMeTables() {
  return "i found you a table sir";
  /* saturday-sunday's are review days("meaning.. looking over all my code this week"),
                                         and studying it*/
}
alert("findMeTables"()); // or console.log() or whatever is chosen
// not sure if the below function applies to the above function "findMeTables"\

function getRandomLetter() { // or "getRandomLetter"?
  var randomLetter = Math.floor(Math.random() * z) + a; // i believe this generates random "letters" from a-z
  return randomLetter; // or "getRandomLetter"?
}
alert(getRandomLetter());

// example 2 is below
function giveMeTime() {
  return "as you wish your majesty";
}
console.log("giveMeTime"());

function getRandomTime() {
  var randomTime = Math.floor(Math.random() * 9: 00) + 1: 30; // i believe this generates a time between 1:30am && 9:00pm ?
  // or getRandomTime?
  return randomTime; // or getRandomTime?
}
alert(getRandomTime());


// "GIVING" information to Functions not getting. is below:
// with arguments?
function goToCoffeeShop(drink) {
  alert(drink + ' is on the way to you!');
}
goToCoffeeShop(' Espresso!'); //this is  passing an argument to a function?
//outputs "Espresso" or other types of drinks. such as tea, chamomile tea, etc..


//below is more practice of the above code "but it could be invalid?"

fuction makeMeRamen("noodles") {
  alert(noodles + 'is being served as we speek');
}

makeMeRamen('teriaky beef ramen');


// below is more "GIVING" information practice code

function buyGuns('hkp30') {
  alert(hkp30 + 'is my favorite handgun of all time');
}
buyGuns('also John Wicks as well'); // "getting " information usesw the return value fyi. but not here

// example 2 is below

function drawManga('anime stories') {
  alert(Bakuman + 'is my favorite anime and Manga of all time');
}

drawManga('very inspiring/ almost as good as Naruto Shippuden');

// example 3 is below

function bestMangaEver('there are a few in my list') {
  console.log("Backuman, Naruto Shippuden, Baruto")
  alert("these are the best Manga ever")
}
bestMangaEver('hits me in the soul / inspires me and makes me happy with myself/my life');
