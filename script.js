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