console.log("First Lab of advance JavaScript");

// Part 1 of Lab (that we did in class)
let counter = 0;

function incrementForever() {
  counter++;
  incrementForever();
}

try {
  // incrementForever();
} catch (error) {
  console.log(error);
  console.log(counter);
}
// got 13956
