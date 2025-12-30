let numBtns = document.querySelectorAll(".num");
let operatorBtns = document.querySelectorAll(".operator");
let equalBtns = document.getElementById("equal");
let clearBtn = document.getElementById("clear")
let display = document.getElementById("display");

let firstNumber = "";
let secondNumber = "";
let operator = "";

let string = "";


clearBtn.addEventListener("click", ()=>{
    display.innerText = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
})

numBtns.forEach((btn) =>{
    btn.addEventListener("click", ()=>{
        if(operator === ""){
            firstNumber += btn.innerText;
            display.innerText = firstNumber;
        }
        else{
            secondNumber += btn.innerText;
            // string = secondNumber;
            display.innerText += secondNumber;
        }
    })
})

operatorBtns.forEach((button)=>{
    button.addEventListener("click", ()=>{
        operator = button.innerText;
        display.innerText += operator;
    })
})

equalBtns.addEventListener("click", ()=>{
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
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if(num2 === 0){
                display.innerText = "Error";
                return;
            }
            result = num1 / num2;
            break;
        case "%":
            result = num2 % num2;
            break;
        default:
            display.innerText = "Error";
            return;
    }

    display.innerText = result;

    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
});


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







