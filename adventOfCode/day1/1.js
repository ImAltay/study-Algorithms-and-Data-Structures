const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, 'input1.txt');
let megaString = '';

async function readFile() {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return data;
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

const x = [];
const y = [];

const solution = (arr1, arr2) => {
  let total = 0;

  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
  for (let i = 0; i < arr1.length; i++) {
    increment = arr1[i] - arr2[i];
    if (increment < 0) {
      total -= increment;
    } else {
      total += increment;
    }
  }

  return total;
};

const adjustData = async () => {
  await readFile().then((data) => {
    megaString = data;
  });
  const allTheDamnLines = megaString.split(/\r?\n/);

  allTheDamnLines.forEach((e) => {
    x.push(parseInt(e.split('   ')[0]));
    y.push(parseInt(e.split('   ')[1]));
  });

  console.log(solution(x, y));
};

adjustData();
