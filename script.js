console.log("First Lab of advance JavaScript");

// Part 1 of Lab (that we did in class)
// Number 1 - declare a global counter variable
let counter = 0;

// Number 2 - create a simple function that increments the variable, and then calls itself recursively
function incrementForever() {
  counter++;
  incrementForever();
}

// Number 3 - surround the initial function call in a try/catch block
try {
  // incrementForever();
} catch (error) {
  // Number 4 - within the catch, log the error and the value of the counter variable
  console.log(error);
  console.log(counter);
}
// got 13956

// This function will take a number and incriment counter to that number
function incrementTo(num) {
  if (num <= 0) return;
  // if (num <=0 || num <= counter) return;

  if (num === counter) return;

  counter += 1;
  incrementTo(num);
}

try {
  incrementTo(10);
  console.log(counter);
} catch (err) {
  console.log(err);
}

// Part 2
// Number 1 - write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are
// function flattenArray(arrays){
// let output = []

//     for (let array of arrays){
//         if()
//     }

// }

// Number 2 - once your recursive function is complete, trampoline it

// Part 3
