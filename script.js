// ---GET BUTTONS AND DISPLAY---
// CLEAR AND DELETE BUTTONS
const clear = document.querySelector(".clear");
const back = document.querySelector(".back");

// NUMBER BUTTONS
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const dot = document.querySelector(".dot");

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

const operate = function(operator, a, b) {
    if (operator === "+") {
       return addition(a,b);
    }
}

// ---BUTTON FUNCTIONALITY---
// NUMBER BUTTONS
one.addEventListener("click", () => {

});