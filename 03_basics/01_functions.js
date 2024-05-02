function sayMyName(){
    console.log("G")
    console.log("U")
    console.log("D")
    console.log("D")
    console.log("U")
}

// sayMyName() //This is called Calling Function
// sayMyName // This is called as reference mostly used in react

// Adding Two Numbers  

function addTwoNumbers(number1,number2){  // The number1 and number 2 called as Parameters
    console.log(number1+number2)
}

addTwoNumbers(22,34)  // Passing value in the function is called as Arguments

// 2nd Way of Getting Ouput for the same problem

function addTwoNumber(number1,number2){
    let result = number1 + number2
    return result
}

addTwoNumber(21,34)