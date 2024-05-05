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
