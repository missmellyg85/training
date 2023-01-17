/* 
    Learning about Array.prototype.map()
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
import { airports } from "./data/airportData.js";
import { cities } from "./data/cityData.js";

// Use map to create a new array from the results of iterating an existing array

const myNumbers = [3, 78, 34, 109, 21];

/*
    Lesson 1
    map takes a callback function with 1-3 parameters: (value, index, array)
    You can call it as a standalone function, but we'll commonly use it as an array method
    Go ahead and run this file to see the output, `node map.js`
*/

const newMyNumbers = myNumbers.map((number) => number);
console.log(myNumbers);
console.log(newMyNumbers);
console.log(myNumbers === newMyNumbers);
//They have the same content, but they are not the same array

/* 
    Lesson 2
    Now what if we want to return something new using each entry?
    Uncomment this and run to see the output
*/

// const numberStatements = myNumbers.map(
//   (number) => `I like the number ${number}`
// );
// console.log(numberStatements);

/*
    Lesson 3
    What if we have an array of objects? This is probably a more common application, having an array of objects
    we'd like to translate into some other kind of object - like a React component!
    Let's go ahead and work with our airplane data to see how we can collect more complex data.
    Uncomment this block and run
*/
// const airportCodes = airports.map((airport) => {
//   return {
//     id: airport.id,
//     code: airport.code,
//   };
// });
// console.log(airportCodes);

/*
    Lesson 4
    This is great, now we have a new collection that is just airplane codes.
    This code also gets the job done, but it's not the most efficient way to use Javascript.
    We can accomplish the same thing by using object destructuring and shorthand syntax.
    Uncomment this block to see the same output accomplished differently
*/
// const airportCodes2 = airports.map(({ id, code }) => ({ id, code }));
// console.log(airportCodes2);

// You'll also notice we can return an object directly without needing a return. We only
// need to wrap the resulting object in parentheses.

/*
    Practice
    1) Using the imported `cities`, which includes city, state, country, and currency,
    collect the country and currency to a new array of objects using a map function

    For example, your first few entries should be:
        [
            { country: 'Poland', currency: 'Zloty' },
            { country: 'Mexico', currency: 'Peso' },
            { country: 'Marshall Islands', currency: 'Dollar' },
        ...
        ]

    2) Then use a .forEach() to print out a sentence for each, stating:
        "Poland's currency is the Zloty",
        "Mexico's currency is the Peso"
        ... and so on
*/
// Write your code here
