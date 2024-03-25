// Code your solution in this file!
// index.js

// Returns a new array containing the first two drivers from the passed-in array
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  // Returns an array of the last two drivers
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  // Array containing functions for selecting drivers
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Returns a function that multiplies a given value using the created multiplier
  function createFareMultiplier(multiplier) {
    return function(value) {
      return value * multiplier;
    };
  }
  
  // Doubles fares
  const fareDoubler = createFareMultiplier(2);
  
  // Triples fares
  const fareTripler = createFareMultiplier(3);
  
  // Returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
  function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
  }
  
  module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
  };
  