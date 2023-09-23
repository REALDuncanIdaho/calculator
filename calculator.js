let firstNumber;
let secondNumber;
let operator;
let currentValue = "";
let lastOp;
let continueValue;

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
}

//defines how the clear button functions
document.getElementById("clear").addEventListener("click", function() {
    firstNumber = null;
    secondNumber = "";
    operator = "";
    clearCurrentValue();
    document.getElementById("displayValue").textContent = currentValue;
    console.log(firstNumber, secondNumber)
})

//defines how the '=' button functions
document.getElementById("solve").addEventListener("click", function() {
    if (secondNumber === null) {
        return;
    } else if (firstNumber != null) {
        secondNumber = currentValue;
        currentValue = "";
        operator = lastOp;
        operate(firstNumber, secondNumber);
        console.log(operator, "1st", firstNumber, "2nd", secondNumber);
        firstNumber = "";
        operator = "";
        console.log(operator, "1st", firstNumber, "2nd", secondNumber);
        continueValue = currentValue;
        document.getElementById("displayValue").textContent = continueValue;
        clearCurrentValue();
        console.log(operator, "1st", firstNumber, "2nd", secondNumber, "current", currentValue);
        
    }
})

//define how operator buttons function
document.querySelectorAll(".math").forEach(function(element) {
    element.addEventListener("click", function() {
        //selects an operator for when "=" is selected, so can continue with currentValue
        if (firstNumber == "" && typeof continueValue === 'number') {
            console.log("continueValue", continueValue)
            firstNumber = continueValue;
            lastOp = this.value;
            console.log(lastOp)
        } //defines secondNumber and completes math
         else if (firstNumber != null) {
            secondNumber = currentValue;
            operator = lastOp;
            operate(firstNumber, secondNumber);
            console.log(operator, "1st", firstNumber, "2nd", secondNumber, "current", currentValue);
            firstNumber = currentValue;
            document.getElementById("displayValue").textContent = currentValue;
            firstNumber = currentValue;
            secondNumber = "";
            operator = this.value;
            let pastValue = currentValue;
            console.log(pastValue)
            document.getElementById("displayValue").textContent = pastValue;
            lastOp = operator;
            console.log(operator, "1st", firstNumber, "2nd", secondNumber);
            clearCurrentValue();
        } else { //defines firstNumber and sets operator
            operator = this.value;
            firstNumber = currentValue;
            currentValue = "";
            lastOp = operator;
            console.log(lastOp, "1st", firstNumber)
            document.getElementById("displayValue").textContent = currentValue;
            };
    });
});

//defines how digit buttons function
document.querySelectorAll(".digit").forEach(function(element) {
    element.addEventListener("click", function() {
        var buttonValue = this.value;
        currentValue += buttonValue;
        document.getElementById("displayValue").textContent = Number(currentValue);
    }); 
});
