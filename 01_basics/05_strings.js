const name = "Prathmesh"
const age = 23

// First Way Of Concatenating Which is Used In Classes
console.log("My First Name Is",name,"and My Age Is", age)

// Second Way Of Concatenating Which Is Used In Industry
console.log(`My First Name Is ${name} and My Age Is ${age}`)

const testName = "Hello World"
console.log(testName.length)

console.log(testName[0]) //Indexing

console.log(testName.charAt(3))  // Which character at particular position

console.log(testName.indexOf('l'))  // It gives the position of the character which is in the " " quotes

console.log(testName.substring(0,4)) // It is substring which takes from 0 and it will show the output of (0 to n-1) n is the number which is in the second position

console.log(testName.slice(-8,4))  // It is slicing which supports negative indexing also

// Trim Function

const testFname = "  Helllo World  "
console.log(testFname)
console.log(testFname.trim())

// Replace Function

const testReplace = "https://prathmesh.com/prathmesh%20yadav"

console.log(testReplace.replace('%20','-'))  // This will take first parameter as a char which presents in string and 2nd will be the replacing text

console.log(testReplace.includes('prathmesh'))  //It will give the boolean value which states that the character is present in the string or not

let testy = "The quick brown fox"
console.log(testy.indexOf('k'))


