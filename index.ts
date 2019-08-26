// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Alphabetic Shift</h1>`;

function alphabeticShift(inputString: string): string {
  const alphabets = "abcdefghijklmnopqrstuvwxyza";
  const charArr = [];
  const vals = inputString.split('');
  for (let i = 0; i < vals.length; i++) {
    let nextVal = alphabets.indexOf(vals[i]);
    charArr.push(alphabets.charAt(nextVal + 1));
  }
  const finalStr = charArr.join("");
  console.log(finalStr);
  return finalStr;
}

console.log(alphabeticShift('crazy'));