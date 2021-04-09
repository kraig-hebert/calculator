// set variables
let decimalPresent = false;
let currentNumber = '0';
let a = 0;
let operator = '';

// set contants
const OPERATORS = ['/', '*', '+', '-'];
const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

// set selectors
const btns = document.querySelectorAll('.btn');
const screenData = document.getElementById('screen-data');

// set event listeners
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        id = e.target.id;
        switch (true) {
            case (NUMBERS.includes(id)):
                addDigit(id);
                break;
            case (OPERATORS.includes(id)):
                if (!addOperator(id)) break;
                operator = id;
                break;
            case (id === '.'):
                checkDecimal(id);
                break;
            case (id === 'clear'):
                clearScreen();
                break;
            case (id === 'delete'):
                deleteNumber();
                break;
            case (id === '='):
                runEquals()
                break;
          };
    });
});

// create actions
function checkDecimal (decimal) {
    if (decimalPresent) false;
    else {
        decimalPresent = true;
        currentNumber += decimal;
        screenData.textContent = currentNumber;
    }
}
function addDigit (digit) {
    if (digit === '0' && currentNumber === '0') false;
    else if (currentNumber === '0') {
        currentNumber = digit;
        screenData.textContent = currentNumber;
    } else if (currentNumber.length < 11) {
        currentNumber += digit;
        screenData.textContent = currentNumber;
    } else return false;
};

function addOperator() {
    if (operator === '' && currentNumber === 0) false;
    else if (operator === '') {
        a = currentNumber;
        currentNumber = '0';
        screenData.textContent = '0';
        return true;
    }
    else {
        screenData.textContent = operate(parseInt(a), parseInt(currentNumber), operator);
        a = screenData.textContent;
        currentNumber = '0';
        return true;
    }
}

function runEquals () {
    if (operator === '') false;
    screenData.textContent = operate(parseInt(a), parseInt(currentNumber), operator);
    a = screenData.textContent;
    currentNumber = '0';
};

function deleteNumber () {
    if (currentNumber.length === 1) {
        currentNumber = '0';
        screenData.textContent = currentNumber;
        return false;
    } else if (currentNumber.slice(currentNumber.length -1) === '.') decimalPresent = false;
    currentNumber = currentNumber.slice(0, -1);
    screenData.textContent = currentNumber;
};

function clearScreen () {
    decimalPresent = false;
    a = 0;
    b = 0;
    operator = '';
    currentNumber = '0';
    screenData.textContent = currentNumber;
};

// create math functions
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

function operate (a, b, operator) {
    if (operator === '+') return add(a, b);
    else if (operator === '-') return sub(a, b);
    else if (operator === '*') return mult(a, b);
    else if (operator === '/') return div(a, b);
};

