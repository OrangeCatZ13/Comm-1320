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
    
    getDayOfTheWeek(2011, "April", 25)
    makeCalendar();
    