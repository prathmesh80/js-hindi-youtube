// Array
let abcd = false;
const myArr = [0,1,2,3,'Prathmesh',abcd,22.35]  //Array can store any type of data 

// console.log(myArr);

console.log(typeof(myArr[5]))  //Way to find type of a particular element

// Array Methods

myArr.push(6) // This method will add element in the Last
myArr.push('Yadav')  //This can take any type of datatype

myArr.pop()  // This will remove the element from the Last

myArr.unshift('Test') // This function is used to Add the element in the starting
myArr.unshift(610) // It can take any type of data-type

console.log(myArr)  // Before Output Using SHIFT Operator

myArr.shift() // This is used to pop the element from Starting

console.log(myArr)  // After Output Using SHIFT Operator


// *************Questionare Methods Of JavaScript*************

// Includes function Gives the Result In True OR False if the element is present it will give True and not will give False

console.log(myArr.includes(6)) 
console.log(myArr.includes('Prathmesh'))
console.log(myArr.includes(9))

// Index Of Function

console.log(myArr.indexOf('Prathmesh'))  // It will give the Index of the element

// Join In Array(This method converts the Array into String)

const newArr = myArr.join()

console.log(myArr) // Output Before Using Join 
console.log(newArr) // Output After Using Join
console.log(typeof(newArr)) //Confirming Type of newArr

// Slice & Splice

const operate = [0,1,2,3,4,5]
console.log(operate)

const opr1 = operate.slice(1,3) // It will give the output 
console.log(opr1)

const opr2 = operate.splice(1,3)  // It will remove the other elements and gives the output within the range from starting to ending including
console.log(opr2)


console.log("**********")
const test2 = ['prathmesh',0,2,1,58,56]
console.log(test2)
console.log(test2.splice(1,3))
console.log(test2)