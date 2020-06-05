// Our array of zoo animals.
const zooAnimals = ["Zebra", "Rhino", "Giraffe", "Owl"];

// Prints 4 to the console because there are 4 items in our zooAnimals array.
console.log(zooAnimals.length);

// Prints Rhino to the console. Remember, the first item in an array has an index position of 0!
console.log(zooAnimals[1]);

// Prints undefined... because the last index ("Owl") is 3.
console.log(zooAnimals[4]);

// Logs the index position for bear. Since bear isn't in the array, -1 is logged.
console.log(zooAnimals.indexOf("bear"));

// Logs the index position for parrot, which is 0.
console.log(zooAnimals.indexOf("Zebra"));

//The push() method adds one or more elements to the end of an array and returns the new length of the array.
const animals = ["pigs", "goats", "sheep"];
animals.push("cows");
animals.push("chickens", "cats", "dogs");

// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
console.log(animals.join(",")); // Prints pigs,goats,sheep,cows,chickens,cats,dogs

//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
console.log(animals.pop()); // Prints dogs

//The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

console.log(
  animals.some(function (element) {
    return element === "cats";
  })
); // Prints true as the function test is passed when it finds the element cats

// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
// The original array will not be modified.
console.log(animals.slice(2)); // Prints [ 'sheep', 'cows', 'chickens', 'cats' ]
console.log(animals.slice(2, 4)); // Prints [ 'sheep', 'cows' ]
