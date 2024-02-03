function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

let first, second, operator = "";
let display = document.querySelector(".screen");

function appendNumber(number) {
    display.value += number;
}

function setOperator(oper){
    operator = oper;
    first = display.value;
    display.value = "";
}

function clearDisplay() {
    display.value = "";
    first = "";
    second = "";
    operator = "";
} 

function calculate() {
    second = display.value; 

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
    console.log("First:" + first);
    console.log("Second:" + second);
    first = '';
    second = '';
    operator = '';
}