// Initialised a variable. The declaration is "divers". The value is an aray.
// Created a function declaration and used splice method to return a new variable. 
// Invoked the function with the variable passed as an argument. 

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2);
}

returnFirstTwoDrivers(drivers);



// The same variable array is used here. 
// Created a function declaration and used splice method to return a new variable. 
// Invoked the function with the variable passed as an argument. 
function returnLastTwoDrivers(drivers){
    return drivers.slice(2);
}

returnLastTwoDrivers(drivers);


// selectingDrivers — This is an array containing two elements: the two functions that we previously defined

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and returns a 
// function that will multiply a fare for a ride accordingly.


function createFareMultiplier(multiplier) {
    return function(x) {
        return x * multiplier;
    }
}

let fareDoubler = createFareMultiplier(2);

let fareTripler = createFareMultiplier(3);

let fareQuintupler = createFareMultiplier(5);


// returns the first two drivers when passed returnFirstTwoDrivers() as the second argument.

function selectDifferentDrivers(drivers, callback) {
    return callback(drivers) ;
}

selectDifferentDrivers(drivers,returnFirstTwoDrivers);
selectDifferentDrivers(drivers,returnLastTwoDrivers);