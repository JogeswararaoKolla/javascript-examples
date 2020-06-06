const moviePatrons = [
  { name: "Chiranjeevi", age: 60 },
  { name: "Ram charan", age: 32 },
  { name: "Prabhas", age: 40 },
];

//forEach is functional way of iterating through an array without a for loop
moviePatrons.forEach((patron) => console.log(patron));

// Creating an array of vegetables.
const vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

// Looping through each item in the array and logging a message to the console.
for (let i = 0; i < vegetables.length; i++) {
  console.log("I love " + vegetables[i]);
}

//The for-of-loop
for (let vegetable of vegetables) {
  console.log(vegetable);
}
