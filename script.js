let total = '';
let tempTotal = '';
let operator = '';

let display = document.getElementById('innerDisplay');
display.textContent = total;

const numKeys = document.querySelectorAll('.numKeys');
numKeys.forEach(key => key.addEventListener('click', addData));
function addData(e) {
    display.textContent += this.value;
    total += this.value;
}

const oprKeys = document.querySelectorAll('.oprKeys');
oprKeys.forEach(key => key.addEventListener('click', addOpr));
function addOpr(e) {
    tempTotal = parseFloat(display.textContent);
    total = 0;
    display.textContent = '';
    operator = this.value;
}

const clear = document.querySelector('#btnClear');
clear.addEventListener('click', function(e) {
    display.textContent = '';
    total = 0;
    tempTotal = 0;
})

const backspace = document.querySelector('#btnBack');
backspace.addEventListener('click', function(e) {
    total = total.slice(0, -1);
    display.textContent = total;
})

const equals = document.querySelector('#equals');
equals.addEventListener('click', function(e) {
    total = parseFloat(total);
    operate(tempTotal, total, operator);
})

const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', function(e) {
    if (!total.includes('.')) {
    display.textContent += this.value;
    total += this.value;
    }
})

function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2
}
function operate(tempTotal, total, operator) {
    
    if (operator == '+') {
        total = add(tempTotal, total);
    }
    if (operator == '-') {
        total = subtract(tempTotal, total);
    }
    if (operator == '*') {
        total =  multiply(tempTotal, total);
    }
    if (operator == '/') {
        total = divide(tempTotal, total)
    }
    display.textContent = total;
}
