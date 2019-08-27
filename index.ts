// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Alphabetic Shift</h1>`;

function alphabeticShift(inputString: string): string {
  const vals = inputString.split('');
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const charArr = [];
  for (let i = 0; i < vals.length; i++) {
    let nextVal = alphabets.indexOf(vals[i]);
    if (alphabets.indexOf(vals[i]) === 25) {
      nextVal = alphabets.indexOf('a') - 1;
    }
    charArr.push(alphabets.charAt(nextVal + 1));
  }
  return charArr.join("");
}

console.log(alphabeticShift('crazy'));