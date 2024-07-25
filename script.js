let firstnumber = "";
let secondnumber = "";
let currentOperator = null;
let resetScreen = false;
const display = document.querySelector("#display");
const numButtons = document.querySelectorAll(".numButton");
const opButtons = document.querySelectorAll(".opButton");
const equalButton = document.querySelector(".equalButton");
const delButton = document.querySelector(".deleteButton");
const clearButton = document.querySelector(".clearButton");

numButtons.forEach(button => {
    button.addEventListener('click', () => appendNumber(button.textContent));
})
opButtons.forEach(button => {
    button.addEventListener('click', () => setOperation(button.textContent));
})
equalButton.addEventListener('click', () => compute());
clearButton.addEventListener('click', () => clear());
function appendNumber(num) {
    if (resetScreen) {
        display.textContent = "";
        resetScreen = false;

    }
    display.textContent += num
}
delButton.addEventListener('click', function () {
    display.textContent = display.textContent.slice(0, -1);
})

function setOperation(op) {
    if (currentOperator !== null)
        compute();
    firstOerand = display.textContent;
    currentOperator = op;
    resetScreen = true;

}

function compute() {
    secondOperand = display.textContent;
    display.textContent = operate(currentOperator, firstOerand, secondOperand);
    currentOperator = null;
}
function clear() {
    display.textContent = "0";
    firstOerand = "";
    secondOperand = "";
    currentOperator = null;
}

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b
}
function division(a, b) {
    if (b == 0) {
        return 'Error! division by zero is undefined!'
    }
    else {
        return a / b;

    }
}
function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a - b);
        case '*':
            return multiply(a, b);
        case "/":
            return division(a, b);
        default:
            return b;

    }
}
