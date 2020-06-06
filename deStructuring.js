let numbers = [1, 2];
// Destructuring the arrays by index
let [a, b, c = "default", ...d] = numbers;
console.log(a, b, c, d);
//Spread operator ... is used to take array and converts to list of values.
console.log(...numbers);
//REST Operator ... is converts the input args to array list
function sumUp(...toAdd) {
  let result = 0;
  for (let i = 0; i < toAdd.length; i++) {
    result += toAdd[i];
  }
  return result;
}

console.log(sumUp(10, 100, 20)); //Prints 130

// Destructuring objects
const obj1 = {
  name: "Humisha Kolla",
  sportsFav: ["cricket", "volleyball", "basketball"],
};

// In the past, if we wanted to pull off an object's property we'd have to do something like this:
const name = obj1.name;
const sportsFav = obj1.sportsFav;
console.log(name);
console.log(sportsFav);

// Now with ES6 object destructuring syntax,we can rename our destructured properties:
const { name: firstName, sportsFav: sports } = obj1;
console.log(firstName, sports);

// We can also use destructuring syntax in the function declaration.
const logging = ({ name: firstName, sportsFav: sports }) =>
  console.log(firstName, sports);

logging(obj1); // Prints Humisha Kolla [ 'cricket', 'volleyball', 'basketball' ]
