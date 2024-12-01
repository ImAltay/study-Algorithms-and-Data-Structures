const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

rl.question('Enter an array of numbers(comma separated): ', (arr) => {
  arr = arr.split(',').map((num) => parseInt(num));
  rl.question('Enter a target: ', (target) => {
    target = parseInt(target);
    console.log("target's index is: " + linearSearch(arr, target));
    rl.close();
  });
});
