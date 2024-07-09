let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operator = null;
let shouldResetDisplay = false;

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operator = null;
    display.innerText = '0';
}

function appendNumber(number) {
    if (shouldResetDisplay) {
        currentOperand = '';
        shouldResetDisplay = false;
    }
    if (currentOperand.length >= 10) return;
    if (currentOperand === '0' && number !== '.') {
        currentOperand = number.toString();
    } else {
        currentOperand += number.toString();
    }
    updateDisplay();
}

function appendDecimal() {
    if (shouldResetDisplay) {
        currentOperand = '0';
        shouldResetDisplay = false;
    }
    if (!currentOperand.includes('.')) {
        currentOperand += '.';
        updateDisplay();
    }
}

function setOperator(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operator = op;
    previousOperand = currentOperand;
    currentOperand = '';
    shouldResetDisplay = false;
}

function calculate() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operator) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentOperand = computation;
    operator = null;
    previousOperand = '';
    shouldResetDisplay = true;
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentOperand;
}

clearDisplay();
