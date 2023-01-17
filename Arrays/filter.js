/* 
    Learning about Array.prototype.filter()
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/
import { airports } from "./data/airportData.js";
import { cities } from "./data/cityData.js";

/*
    Lesson 1
    filter takes a callback function with 1-3 parameters: (value, index, array)
    The return value of the function must be truthy
    You can call it as a standalone function, but we'll commonly use it as an array method
    Go ahead and run this file to see the output, `node filter.js`
*/

const citiesWithStates = cities.filter(({ state }) => state !== null);
console.log(citiesWithStates);
//

/*
    Practice
    1) Using the imported `airports`, which includes id, name, code, and elevation,
    filter for the International airports
*/
// Write your code here
