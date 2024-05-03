/*
const user =  {
    username : "Prathmesh",
    age : 23,

    welcomeMessage: function(){  // It is called as method
        console.log(`${this.username}, Welcome to Website`);
        console.log(this)
    }
}

user.welcomeMessage()
user.username = "Machhindranath"  // Username can be overwritten
user.welcomeMessage()
*/
//console.log(this) // In globally it will return empty but if declared in object it will print the whole object with the values



// This Function in Function()


// The ouput will show undefined as function dosen't support this operator 
function chai(){
    let usernamne = "Pharmizza"
    console.log(this.usernamne)
}

chai()

// Using Arrow Function

// This also will not run as "this" function not run in function
const chais = () => {
    let username = "Prathmesh Yadav"
    console.log(this.username)
}

// Arrow function Syntax

() => {}

//  Arrow in variable 1st Way

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(5,6))

// 2nd Way Implicit Return
const addTwos = (num1,num2) => num1 + num2 // Mostly Used In React
console.log(addTwos(13,65))

//3rd Way
const addThree = (num1,num2,num3) => (num1 + num2 + num3)  // Mostly Used In React
console.log(addThree(13,65,54))

// Adding Object In Arrow Functions Using Function

const addFour = (num1,num2,num3,num4) => ({username: "Prathmesh"})  // Mostly Used In React
console.log(addFour(13,65,54,56))