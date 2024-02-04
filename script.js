function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function roundToTen(number) {
    return +(Math.round(number + "e+10") + "e-10");
} 

function divide(a, b) {
    return roundToTen(a / b);
};

let first, second, operator = "";
let display = document.querySelector(".screen");
let history = document.querySelector(".history");

function appendNumber(number) {
    display.value += number;
};

function appendDecimal() {
    if (!(display.value.includes("."))) {
        display.value += ".";
    }
};

function setOperator(oper){
    operator = oper;
    first = display.value;
    history.value = first + " " + operator;
    display.value = "";
};

function clearDisplay() {
    display.value = "";
    first = "";
    second = "";
    operator = "";
    history.value = "";
};

function clearOne() {
    display.value = display.value.substring(0, display.value.length - 1);
};

function operate() {
    second = display.value; 
    history.value += " " + second;

    if (operator === '+') {
        display.value = add(parseFloat(first), parseFloat(second));
    } else if (operator === '-') {
        display.value = subtract(parseFloat(first), parseFloat(second));
    } else if (operator === '×') {
        display.value = multiply(parseFloat(first), parseFloat(second));
    } else if (operator === '÷') {
        if (parseInt(second) === 0) {
            display.value = 'Error: Cannot divide by 0';
        } else {
            display.value = divide(parseFloat(first), parseFloat(second));
        }
    }
    first = '';
    second = '';
    operator = '';
};