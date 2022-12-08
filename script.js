// ---GET BUTTONS AND DISPLAY---
// CLEAR AND DELETE BUTTONS
const clear = document.querySelector(".clear");
const back = document.querySelector(".back");

// NUMBER AND OPERATION BUTTONS
const numberButton = document.querySelectorAll(".numbutton");
const operateButton = document.querySelectorAll(".opbutton");
const equals = document.querySelector(".equals");

// DISPLAY
const inputText = document.querySelector(".inputtext");
const solutionText = document.querySelector(".answertext");

inputText.innerText = "";
solutionText.innerText = "";

// BASIC VARIABLES
let shouldUpdate = true;
let tempNum = "";
let firstNum = "";
let secondNum = "";
let currentOperator = "";

// ---BASIC MATH FUNCTIONS---

const addition = function(a, b) {
    return Number(a) + Number(b);
}

const subtraction = function(a, b) {
    return Number(a) - Number(b);
}

const multiplication = function(a, b) {
    return Number(a) * Number(b);
}

const division = function(a, b) {
    return Number(a) / Number(b);
}

const operate = function(operator, num1, num2) {
    if(inputText.textContent === "") return;
    if (operator === "+") {
        return addition(firstNum, secondNum);
    }
}

// ---BUTTON FUNCTIONALITY---
// NUMBER AND OPERATOR BUTTONS
numberButton.forEach((button) => {
    button.addEventListener("click", () => {
        tempNum += button.textContent;
        updateInput(button.textContent);
        shouldUpdate = true;
    });
});

operateButton.forEach((button) => {
    button.addEventListener("click", () => {
        updateOperator(button.textContent);
        inputText.textContent += button.textContent;
    })
})

equals.addEventListener("click", () => {
    if (firstNum === "") return;
    operate(currentOperator, firstNum, secondNum);
});

// CLEAR AND DELETE BUTTONS
clear.addEventListener("click", () => {
    inputText.textContent = "";
    solutionText.textContent = "";
    tempNum = "";
    firstNum = "";
    secondNum = "";
    shouldUpdate = true;
});

back.addEventListener("click", () => {
    inputText.textContent = inputText.textContent.toString().slice(0, -1);
});

function updateInput(num) {
    inputText.textContent += num;
}

function updateOperator(op) {
    if (currentOperator !== "") {
        checkOperator();    
    } else {
        firstNum = tempNum;
    }
    tempNum = "";
    currentOperator = op;
}

function checkOperator() {
    secondNum = tempNum;
    const result = operate(currentOperator, firstNum, secondNum);
    solutionText.textContent = result;
    firstNum = result;
    secondNum = "";
}