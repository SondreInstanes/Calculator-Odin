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

const operate = function(operator) {

}

// ---BUTTON FUNCTIONALITY---
// NUMBER BUTTONS
numberButton.forEach((button) => {
    button.addEventListener("click", () => {
        updateInput(button.textContent);
    });
});

function updateInput(num) {
    inputText.textContent += num;
}