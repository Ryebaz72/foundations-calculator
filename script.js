let firstNumber = "";
let secondNumber = "";
let firstNumberSet = false;
let secondNumberSet = false;
let firstOpSet = false;
let secondOpSet = false;

let operator = "";
let prevOperator = "";
let opBtn = "";
let displayResult = "";
const calcDisplay = document.getElementById("calcDisplay");
const btns = document.getElementById("btns");
const num = document.getElementById("nums");
const ops = document.getElementById("opsDiv");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("You can't divide by Zero!!");
        firstNumber = "";
        secondNumber = "";
        operator = "";
        return 0;
    }
    return a / b;
}

function operate(num1, num2, operator) {
    let result = 0;
    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            break;
    }
    console.log("#Dc ", firstNumber, firstNumberSet, secondNumber, secondNumberSet, result);
    return result;
}

function display() {
    btns.addEventListener("click", (event) => {
        let btnClicked = event.target;
        let btnValue = btnClicked.id;
        if (firstNumberSet && secondNumberSet) {
            displayResult = "";
            secondNumberSet = false;
        }
        switch (btnValue) {
            case "btn0":
                displayResult = displayResult + "0";
                if (firstNumberSet) {
                    secondNumber = secondNumber + "0";
                } else {
                    firstNumber = firstNumber + "0";
                }
                break;
            case "btn1":
                displayResult = displayResult + "1";
                if (firstNumberSet) {
                    secondNumber = secondNumber + "1";
                } else {
                    firstNumber = firstNumber + "1";
                }
                break;
            case "btn2":
                displayResult = displayResult + "2";
                if (firstNumberSet) {
                    secondNumber = secondNumber + "2";

                } else {
                    firstNumber = firstNumber + "2";
                }
                break;
            case "btn3":
                displayResult = displayResult + "3";
                if (firstNumberSet) {
                    secondNumber = secondNumber + "3";

                } else {
                    firstNumber = firstNumber + "3";
                }
                break;
            case "btn4":
                displayResult = displayResult + "4";
                if (firstNumberSet) {
                    secondNumber = secondNumber + "4";

                } else {
                    firstNumber = firstNumber + "4";
                }
                break;
            case "btn5":
                displayResult = displayResult + "5";
                if (firstNumberSet) {
                    secondNumber = secondNumber + "5";
                } else {
                    firstNumber = firstNumber + "5";
                }
                break;
            case "btn6":
                displayResult = displayResult + "6";
                if (firstNumberSet) {
                    secondNumber = secondNumber + "6";
                } else {
                    firstNumber = firstNumber + "6";
                }
                break;
            case "btn7":
                displayResult = displayResult + "7";
                if (firstNumberSet) {
                    secondNumber = secondNumber + "7";
                } else {
                    firstNumber = firstNumber + "7";
                }
                break;
            case "btn8":
                displayResult = displayResult + "8";
                if (firstNumberSet) {
                    secondNumber = secondNumber + "8";
                } else {
                    firstNumber = firstNumber + "8";
                }
                break;
            case "btn9":
                displayResult = displayResult + "9";
                if (firstNumberSet) {
                    secondNumber = secondNumber + "9";
                } else {
                    firstNumber = firstNumber + "9";
                }
                break;
            case "btnAdd":
                operator = "+";
                displayResult = "+";
                if (firstOpSet) {
                    secondOpSet = true;
                    prevOperator = operator;
                }
                firstNumberSet = true;
                secondNumberSet = true;
                firstOpSet = true;
                break;
            case "btnSubtract":
                operator = "-";
                displayResult = "-";
                if (firstOpSet) {
                    secondOpSet = true;
                    prevOperator = operator;
                }
                firstNumberSet = true;
                secondNumberSet = true;
                firstOpSet = true;
                break;
            case "btnMultiply":
                operator = "*";
                displayResult = "*";
                if (firstOpSet) {
                    secondOpSet = true;
                    prevOperator = operator;
                }
                firstNumberSet = true;
                secondNumberSet = true;
                firstOpSet = true;
                break;
            case "btnDivide":
                operator = "/";
                displayResult = "/";
                if (firstOpSet) {
                    secondOpSet = true;
                    prevOperator = operator;
                }
                firstNumberSet = true;
                secondNumberSet = true;
                firstOpSet = true;
                break;
            case "btnEquals":
                opBtn = "=";
                displayResult = "=";
                secondNumberSet = true;
                secondNumberSet = true;
                break;
            case "btnClear":
                opBtn = "C";
                operator = "";
                displayResult = "0";
                firstNumber = "";
                secondNumber = "";
                firstNumberSet = false;
                secondNumberSet = false;
                break;
            default:
                break;
        }
        calcDisplay.textContent = displayResult;

        if (opBtn === "=" || secondOpSet) {
            displayResult = "";
            let a = parseInt(firstNumber);
            let b = parseInt(secondNumber);
            displayResult = operate(a, b, operator);
            calcDisplay.textContent = displayResult;
            if (secondOpSet) {
                opBtn = "";
                firstNumber = displayResult;
                secondNumber = "";
                firstNumberSet = true;
                secondNumberSet = true;
                secondOpSet = false;
            } else {
                displayResult = "";
                opBtn = "";
                firstNumber = "";
                secondNumber = "";
                firstNumberSet = false;
                secondNumberSet = false;
                firstOpSet = false;
                operator = "";
            }
        }
        console.log("#Dn ", firstNumber, firstNumberSet, secondNumber, secondNumberSet, displayResult);
        console.log("#Do ", operator, firstOpSet, secondOpSet, opBtn, prevOperator);
    })
}

display();