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

const result = addTwoNumber(21,34) // The variable "result" is different from the function vcariable as this is declared in global scope
console.log("Result: ",result)


// If else Using Function

function test(username){
    if(!username){
        return `Name not given is not given`
    }
    return`${username} Hello`
}

console.log(test('Hello'))

// Another Way of writing the code

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Prathmesh"))   // This value will be pass in the function as the previous value will be overwrite


// New Session

function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(100,200,300))

// The above function can take only one argument to tackle this issue REST or SPREAD operator is Used
// The syntax of the this operator is same just name is different "...name"

function calculateCartPrices(...num1){
    return num1
}

console.log(calculateCartPrices(100,200,300))   

// After running this function which has "...num1" rest operator will return an array in the output which takes all the areguments inside it

// 3rd way of this function

function calcCartPrices(val1,val2,...num1){
    return `Value 1 is: ${val1} and value 2 is ${val2} and rest is ${num1}`  // In val1 the value is 100 and the val2 value is 200 and the rest of the value is gone in rest which is ...num1
}

console.log(calcCartPrices(100,200,300,400))   


// Function Using Objects

const user = {
    username: "Prathmesh",
    age: 23
}

function handleObject(anyobject){  //anyobject parametyer is used to pass any object in it
    console.log(`Username is ${anyobject.username} and the Age is ${anyobject.age}`)
}

handleObject(user)

// Second Way of passing the arguments in Objects
// Default value will be overwrite as it takes the new values which we have passed
handleObject({
    username : "Machhindranath",
    age: 30
})

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
