// The map() method creates a new array with the results of
// calling a provided function on every element in the calling array.

let numbers = [1, 5, 6, 9, 6, 8];

let squares = numbers.map(function (element, index, arr) {
  return element * element;
});

console.log(squares);

// Map function lets you loop over array and calls the callback function provided for each element.
let map = (arr, cb) => {
  let results = [];
  for (let index = 0; index < arr.length; index++) {
    let currElement = arr[index];
    results.push(cb(currElement, index, arr));
    // Here the cb function called with 3 arguemnts hence the index and arr are omitted.
  }
  return results;
};
// callback function takes element and returns doubled value
let doubled = map(numbers, function (element) {
  return element * 2;
});

console.log(doubled);

// The filter() method creates a new array with all elements that pass the test
// implemented by the provided function.
// The indexOf() method returns the first index at which a given element can be found
// in the arr

let duplicates = numbers.filter(
  (value, index, arr) => index == arr.indexOf(value)
);

console.log(duplicates);

// The reduce() method executes a reducer function (that you provide) on each element
//  of the array, resulting in a single output value.

let sum = numbers.reduce((prev, curr, index, arr) => {
  return prev + curr;
});

console.log(sum);

// filter lets you loop over an array and calls the callback function passed
// which will filter only even numbers
var filter = function (arr, cb) {
  var result = [];
  for (var index = 0; index < arr.length; index++) {
    var currentElement = arr[index];
    if (cb(currentElement, index)) {
      result.push(currentElement);
    }
  }
  return result;
};

var evenNumbers = filter(numbers, function (currentElement) {
  return currentElement % 2 === 0;
});
console.log(evenNumbers);

// We can safely swap out function expressions with arrow functions most of the time

let greet = function (first = "Humisha", last = "Kolla") {
  return "Hello " + first + " " + last;
};

console.log(greet("Jogi", "Kolla"));

console.log(greet()); // Function call with default arguments

// If the arrow function body contains only one expression, we can omit the curly braces and auto return it

// If an arrow function only has one parameter, we can omit the parens () around the single parameter

// We call arrow functions the same way as we call regular functions
