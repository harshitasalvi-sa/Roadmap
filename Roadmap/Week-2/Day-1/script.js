// let numBtns = document.querySelectorAll(".num-pad");
let numBtns = document.getElementById("num-pad");
let operatorBtns = document.querySelectorAll(".operator");
let equalBtns = document.getElementById("equal");
let clearBtn = document.getElementById("clear")
let backspaceBtn = document.getElementById("backspaceBtn");
let display = document.getElementById("display");

let firstNumber = "";
let secondNumber = "";
let operator = "";

//delegation
numBtns.addEventListener("click", (e)=>{
    if(e.target.tagName === "BUTTON" && e.target.classList.contains("num")){
        if(operator === ""){
            firstNumber += e.target.innerText;
            display.innerText = firstNumber;
        }
        else{
            secondNumber += e.target.innerText;
            display.innerText += e.target.innerText;
        }
    }
});

// numBtns.forEach((btn) =>{
//     btn.addEventListener("click", ()=>{
//         if(operator === ""){
//             firstNumber += btn.innerText;
//             display.innerText = firstNumber;
//         }
//         else{
//             secondNumber += btn.innerText;
//             display.innerText += btn.innerText;
//         }
//     })
// })


operatorBtns.forEach((button)=>{
    button.addEventListener("click", ()=>{
        

        if (firstNumber !== "" && secondNumber !== "") {
            calculateResult();
        }
        operator = button.innerText; //
        display.innerText += operator;
    })
})

clearBtn.addEventListener("click", ()=>{
    handleClear();
})

backspaceBtn.addEventListener("click", () => {
    handleBackspace();
});

equalBtns.addEventListener("click", ()=>{
    calculateResult();
});

function calculateResult(){
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);
    let result;

    if(isNaN(num2)){
        display.innerText = num1;
        return;
    }

    if(isNaN(num1) || isNaN(num2) || operator === "") {
        display.innerText = "Error";
        return;
    }

    switch(operator){
        case "+":
            //result = num1 + num2;
            result = add(num1, num2);
            break;
        case "-":
            //result = num1 - num2;
            result = substract(num1, num2);
            break;
        case "*":
            //result = num1 * num2;
            result = multiply(num1, num2);
            break;
        case "/":
            if(num2 === 0){
                display.innerText = "Error";
                return;
            }
            //result = num1 / num2;
            result = divide(num1, num2);
            break;
        default:
            display.innerText = "Error";
            return;
    }

    display.innerText = result;

    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
}

function add(a, b){
    return a+b;
}
function substract(a, b){
    return a-b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a/b;
}

//KEYBOARD input
document.addEventListener("keydown", (e)=>{
    const key = e.key;

    if(!isNaN(key)){
        handleNumbers(key);
    }
    else if(key === "+" || key === "*" || key === "-" || key === "/"){
        handleOperators(key);
    }
    else if(key === "=" || key === "Enter"){
        calculateResult();
    }
    else if(key === "Backspace"){
        handleBackspace();
    }
    else if(key === "Escape"){
        handleClear();
    }

})

function handleNumbers(value){
    if(operator === ""){
            firstNumber += value;
            display.innerText = firstNumber;
        }
    else{
            secondNumber += value;
            display.innerText += value;
    }
}

function handleOperators(op){
    operator = op;
    display.innerText += operator;
}

function handleBackspace(){
    if (operator === "") {
        firstNumber = firstNumber.slice(0, -1);
        display.innerText = firstNumber;
    } else {
        secondNumber = secondNumber.slice(0, -1);
        display.innerText = firstNumber + operator + secondNumber;
    }
}

function handleClear(){
    display.innerText = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
}








