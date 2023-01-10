/* 
    Learning about Array.prototype.forEach()
*/
import airportData from "./airportData.json" assert { type: "json" };
import cityData from "./cityData.json" assert { type: "json" };

// Use forEach to iterate an array

const myNumbers = [3, 78, 34, 109, 21];

/*
    Lesson 1
    forEach takes a callback function with 1-3 parameters: (value, index, array)
    You can call it as a standalone function, but we'll commonly use it as an array method
    Go ahead and run this file to see the output, `node forEach.js`
*/

myNumbers.forEach((number) => {
  console.log(number);
});

/* 
    Lesson 2
    Now what if we want to use the index for something?
    Uncomment this and run to see the output
*/

// myNumbers.forEach((number, index) => {
//   console.log(`Number ${index}: ${number}`);
// });

/*
    Lesson 3
    What if we have an array of objects? Let's go ahead and work with our airplane data
    Uncomment this block and run
*/
// airportData.forEach((airport) => {
//   console.log(airport);
// });
// We see in the output that we have an array of objects. What if we want to access the properties separately?

/*
    Lesson 4
    Deconstructing objects in a callback
    Uncomment this block and run
*/
// airportData.forEach(({ name, elevation }) => {
//   console.log(`The elevation for ${name} is ${elevation} feet`);
// });

/*
    Practice
    Using the imported `cityData`, which includes city, state, country,
    print out a 1-indexed numbered list that shows "city, state" if there is a state, 
    otherwise it should print "city, country"

    For example, your first few outputs should show:
        1. Mejdan - Obilićevo, Bosnia and Herzegovina
        2. Johnson City, Tennessee
        3. Skomlin, Poland
        ...
*/
// Write your code here
