// when using var the variable i exits after the block scope.
for (var i = 0; i < 5; i++) {
  console.log("Inside loop " + i);
}
console.log(i); // Prints 5

// when using let the variable counter defined inside the block scope if,while,for etc.. don't exits outside.
for (let counter = 0; counter < 4; counter++) {
  console.log("Inside counter  loop " + counter);
}
// console.log(counter); //Prints ReferenceError: counter is not defined

let counter = 10;
console.log(counter); // Prints 10 as counter is defined in above line

// const can be used for the values which we will not reassign
const name = "";
// name = "jogi"; // TypeError: Assignment to constant variable.

// Unlike primitive data types, objects and arrays are passed by reference, rather than passed by value
const fruits = ["Apples", "Oranges", "Grapes"];
fruits.push("Banana");
// This works because by updating array contents, We aren't changing the reference to the underlying array
console.log(fruits);
// fruits = ["Pineapple"]; // TypeError: Assignment to constant variable
console.log(fruits);
//arrays and objects that are using `const` we can't reassign them but we can modify them

const person = { name: "Jogi", age: 29 };
person.age++;
person.favoriteMovie = "Mahabarth";
person.name = "Kolla";
console.log(person); // Prints { name: 'Kolla', age: 30, favoriteMovie: 'Mahabarth' }

// person = { sport: "Cricket" }; // TypeError: Assignment to constant variable.
