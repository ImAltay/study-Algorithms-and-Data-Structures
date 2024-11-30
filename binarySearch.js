const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

rl.question('Enter a sorted array of numbers(comma separated): ', (arr) => {
  arr = arr.split(',').map((num) => parseInt(num));
  rl.question('Enter a target: ', (target) => {
    target = parseInt(target);
    console.log("target's index is: " + binarySearch(arr, target));
    rl.close();
  });
});
