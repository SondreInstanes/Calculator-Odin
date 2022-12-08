// ---GET BUTTONS AND DISPLAY---
// CLEAR AND DELETE BUTTONS
const clear = document.querySelector(".clear");
const back = document.querySelector(".back");

// NUMBER BUTTONS
const numberButton = document.querySelectorAll(".numbutton");

// OPERATION BUTTONS
const plus = document.querySelector(".add");
const minus = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const equals = document.querySelector(".equals");

// DISPLAY
const inputText = document.querySelector(".inputtext");
const solutionText = document.querySelector(".answertext");

inputText.innerText = "";
solutionText.innerText = "";

// BASIC VARIABLES
shouldUpdate = true;
firstNum = "";
secondNum = "";
currentOperator = "";

// ---BASIC MATH FUNCTIONS---

const addition = function(a, b) {
    return (Number(a + b));
}

const subtraction = function(a, b) {
    return (Number(a - b));
}

const multiplication = function(a, b) {
    return (Number(a * b));
}

const division = function(a, b) {
    return (Number(a / b));
}

const operate = function(operator, num1, num2) {
    if(inputText.textContent === "") return;
}

// ---BUTTON FUNCTIONALITY---
// NUMBER AND OPERATOR BUTTONS
numberButton.forEach((button) => {
    button.addEventListener("click", () => {
        updateInput(button.textContent);
        shouldUpdate = true;
    });
});

plus.addEventListener("click", () => {
    if(shouldUpdate) {
        currentOperator = "+";
        updateInput(plus.textContent);
        shouldUpdate = false;
    }
});

minus.addEventListener("click", () => {
    if(shouldUpdate) {
    updateInput(minus.textContent);
    shouldUpdate = false;
    }
});

multiply.addEventListener("click", () => {
    if(shouldUpdate) {
    updateInput(multiply.textContent);
    shouldUpdate = false;
    }
});

divide.addEventListener("click", () => {
    if(shouldUpdate) {
    updateInput(divide.textContent);
    shouldUpdate = false;
    }
});

equals.addEventListener("click", () => {
    if (inputText.textContent.includes("+")){
        inputText.textContent.split("+")
    }
});

// CLEAR AND DELETE BUTTONS
clear.addEventListener("click", () => {
    inputText.textContent = "";
    solutionText.textContent = "";
    shouldUpdate = true;
});

back.addEventListener("click", () => {
    inputText.textContent = inputText.textContent.toString().slice(0, -1);
});

function updateInput(num) {
    inputText.textContent += num;
}

function updateOperator(op) {

}