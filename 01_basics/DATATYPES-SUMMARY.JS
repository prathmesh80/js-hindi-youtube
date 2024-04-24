//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

console.log(typeof anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non-primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)


// Example of Stack Memory
let myName = "Prathmesh"
let petName = myName
petName = "Guddu"

console.log(myName)
console.log(petName)

//Example Of Heap Memory

let userOne = {
    userName:"Prathmesh Yadav",
    address:"Kurla"
}

userTwo = userOne
userTwo.address = "Ambernath"
console.log(userOne.address)
console.log(userTwo.address)

console.log(userOne)
console.log(userTwo)

