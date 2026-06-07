let firstNumber = '';
let operator = '';
let currentInput = '0';

function updateDisplay() {
  document.getElementById('result').textContent = currentInput;
}

function pressKey(value) {

  if (value >= '0' && value <= '9' || value === '.') {
    if (currentInput === '0') {
      currentInput = value;
    } else {
      currentInput += value;
    }
    updateDisplay();
  }

  if (['+', '-', '*', '/'].includes(value)) {
    firstNumber = currentInput;
    operator = value;
    currentInput = '0';
  }

  if (value === '=') {
    let a = parseFloat(firstNumber);
    let b = parseFloat(currentInput);
    let result = 0;

    if (operator === '+') result = a + b;
    if (operator === '-') result = a - b;
    if (operator === '*') result = a * b;
    if (operator === '/') result = b !== 0 ? a / b : 'Error';

    currentInput = String(result);
    updateDisplay();
  }

  if (value === 'C') {
    firstNumber = '';
    operator = '';
    currentInput = '0';
    updateDisplay();
  }

}