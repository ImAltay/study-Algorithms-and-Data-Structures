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

const solution = (x, y) => {
  let total = 0;

  for (let i = 0; i < x.length; i++) {
    let similarityCount = 0;
    for (let j = 0; j < y.length; j++) {
      if (x[i] === y[j]) {
        similarityCount += 1;
      }
    }
    total = total + similarityCount * x[i];
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
