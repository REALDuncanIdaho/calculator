let firstNumber;
let secondNumber;
let operator;
let currentValue = "";

function add(a, b) {
    return a + b
};

function subtract(a, b) {
    return a - b
};

function multiply(a, b) {
    return a * b
};

function divide(a, b) {
    return a / b
};

function operate(a, b) {
    if (operator == "add") {
        currentValue = add(a, b)
    } else if (operator == "subtract") {
        currentValue = subtract(a, b)
    } else if (operator == "multiply") {
        currentValue = multiply(a, b)
    } else if (operator == "divide") {
        currentValue = divide(a, b)
    }
};

//defines how the clear button functions
document.getElementById("clear").addEventListener("click", function() {
    firstNumber = undefined;
    secondNumber = "";
    currentValue = "";
    operator = "";
    document.getElementById("displayValue").textContent = currentValue + "clear";
    console.log(firstNumber, secondNumber)
})

//defines how the '=' button functions
document.getElementById("solve").addEventListener("click", function() {
    if (firstNumber != undefined) {
        secondNumber = currentValue;
        currentValue = "";
        operate(firstNumber, secondNumber);
        console.log("1st", firstNumber, "2nd", secondNumber);
        document.getElementById("displayValue").textContent = currentValue + "=";
    }
})

//define how operator buttons function
document.querySelectorAll(".math").forEach(function(element) {
    element.addEventListener("click", function() {
        operator = this.value;
        if (firstNumber != undefined) {
            secondNumber = currentValue;
            currentValue = "";
            console.log("1st", firstNumber, "2nd", secondNumber);
            document.getElementById("displayValue").textContent = currentValue + "2nd math";
        } else {
            firstNumber = currentValue;
            currentValue = "";
            console.log(operator);
            console.log("1st", firstNumber)
            document.getElementById("displayValue").textContent = currentValue + "1st math";
            };
    });
});

//defines how digit buttons function
document.querySelectorAll(".digit").forEach(function(element) {
    element.addEventListener("click", function() {
    var buttonValue = this.value;
    currentValue +=buttonValue;
    document.getElementById("displayValue").textContent = currentValue + "number"; //change buttonValue to totalValue after writing function
    });
});

