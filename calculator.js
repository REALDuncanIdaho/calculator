let firstNumber;
let secondNumber;
let operator;
let currentValue = "";

function add(a, b) {
    return (Number(a) + Number(b));
};

function subtract(a, b) {
    return (Number(a) - Number(b));
};

function multiply(a, b) {
    return (Number(a) * Number(b));
};

function divide(a, b) {
    return (Number(a) / Number(b));
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

function clearCurrentValue() {
    currentValue = "";
    document.getElementById("displayValue").textContent = currentValue;

}

//defines how the clear button functions
document.getElementById("clear").addEventListener("click", function() {
    firstNumber = null;
    secondNumber = "";
    currentValue = "";
    operator = "";
    clearCurrentValue();
    console.log(firstNumber, secondNumber)
})

//defines how the '=' button functions
document.getElementById("solve").addEventListener("click", function() {
    if (secondNumber === null) {
        return;
    } else if (firstNumber != null) {
        secondNumber = currentValue;
        currentValue = "";
        operate(firstNumber, secondNumber);
        console.log(operator, "1st", firstNumber, "2nd", secondNumber);
        firstNumber = currentValue;
        secondNumber = "";
        operator = null;
        document.getElementById("displayValue").textContent = currentValue;
        console.log(operator, "1st", firstNumber, "2nd", secondNumber);
        
    }
})

//define how operator buttons function
document.querySelectorAll(".math").forEach(function(element) {
    element.addEventListener("click", function() {
        operator = this.value;
        if (firstNumber != null) {
            secondNumber = currentValue;
            currentValue = "";
            console.log(operator, "1st", firstNumber, "2nd", secondNumber);
            document.getElementById("displayValue").textContent = currentValue;
        } else {
            firstNumber = currentValue;
            currentValue = "";
            console.log(operator);
            console.log("1st", firstNumber)
            document.getElementById("displayValue").textContent = currentValue;
            };
    });
});

//defines how digit buttons function
document.querySelectorAll(".digit").forEach(function(element) {
    element.addEventListener("click", function() {
        var buttonValue = this.value;
        if (typeof firstNumber === 'number') {
            firstNumber = null;
            operator = null;
            clearCurrentValue();
            currentValue += Number(buttonValue);
            console.log(typeof(firstNumber), firstNumber)
        } else {
            currentValue += buttonValue;
        }
        document.getElementById("displayValue").textContent = Number(currentValue);
    });
});

