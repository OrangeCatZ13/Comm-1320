// get TheDayOfTheWeek
// Step 1:
// Step 2:
// Step 3:
// Step 4:
// Step 5:


function getTheDayOfTheWeek(year, month, day){
console.log(year);
console.log(month);
console.log(day);
}

//"Calling" a function (Turning on the function)
getTheDayOfTheWeek(2021, "March", 25); 
// makeCalendar

function markCalendar() {
    console.log("MakeCalendar");
}

// Step 1: Export the function (make them available in other files, unlock the functions)
module.exports = {getDayOfTheWeek, makeCalendar};

// Step 2: import the function (bring those functions into this file)
var getDayOfTheWeek = require(""./lab2").getDayOfTheWeek;
var makeCalendar = require("./lab2").makeCalendar;
var readline = require("readline-sync");

var answer = readline.question("Enter a Year, Month, Date");
var year = readline.question("Enter a Year: ")
var month = readline.question("Enter a month: ")
var date = readline.question("Enter a date: ")

getDayOfTheWeek(year, month, date) // This is us (developer)
makeCalendar();

function getDayOfTheWeek(year, month, date)
var daysofWeek = ["Sunday", "Monday", "Tuesday", "Wednesdsay", "Thursday", "Friday", "Saturday"];

var daysofweek[2]

// EXAMPLE
var answer = readline.question("What is 4+4?");
if (answer = "8") {
    console.log("Your answer is correct");
} else {}
console.log("Your answer is incorrect");

