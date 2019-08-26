// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Alphabetic Shift</h1>`;
function alphabeticShift(inputString: string): string {
  let vals = inputString.split('');
  // console.log(vals);
  for (let i = 0; i < vals.length; i++) {
      console.log(vals[i]);
  }
}

console.log(alphabeticShift('crazy'));