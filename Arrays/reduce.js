/* 
    Learning about Array.prototype.reduce()
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/
import { airports } from "./data/airportData.js";
import { cities } from "./data/cityData.js";

// The most common example for reduce is finding a sum of numbers

const myNumbers = [3, 78, 34, 109, 21];

/*
    Lesson 1
    reduce has many different signatures
    The one we'll use today takes a callback function of 2-4 parameters followed by an initial value:
    reduce((accumulator, currentValue, currentIndex) => { ... }, initialValue)
    You can call it as a standalone function, but we'll commonly use it as an array method
    Go ahead and run this file to see the output, `node map.js`
*/

const initialValue = 0;
const sumWithInitial = myNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial);
// Cool party trick

/* 
    Lesson 2
    A better use case is using .reduce() to combine multiple Array functions into one iteration
    Consider if we wanted to filter out cities without states and then map the resulting array
    to a new object that tracks country currency (for example's sake!). 
    You'll commonly see people create an empty array and fill it using a .forEach()
    We could also do that with a .filter() and a .map() but then we're iterating twice.
    We can use reduce to do them at the same time.
*/
/* .forEach approach */
// const newArr = [];
// cities.forEach(({ city, state, country, currency }) => {
//   if (state !== null) {
//     newArr.push({ country, currency });
//   }
// });
// console.log(newArr);

/* .filter().map() approach */
// const newArr2 = cities
//   .filter(({ state }) => state !== null)
//   .map(({ country, currency }) => ({ country, currency }));
// console.log(newArr2);

/* .reduce() approach */
// const newArr3 = cities.reduce((accumulator, currentValue) => {
//   // Another way to deconstruct values
//   const { state, country, currency } = currentValue;

//   if (state !== null) {
//     accumulator.push({ country, currency });
//   }

//   return accumulator;
// }, []);
// console.log(newArr3);

/*
    Practice
    Using the imported `airports`, which includes id, name, code, and elevation,
    filter for the International airports and collect their id and elevation to a new object

    Your results should be:
       [
            { id: 1, elevation: '294' },
            { id: 4, elevation: '7361' },
            { id: 10, elevation: '84' }
        ]
*/
// Write your code here
