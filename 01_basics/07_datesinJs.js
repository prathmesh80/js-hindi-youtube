"use strict" // This is used to run the JS code in New Version Of JS

// dates functions

let myDate = new Date()

console.log(typeof(myDate))

// console.log(myDate.toString()) // It will give output whichis at GMT
// console.log(myDate.toISOString()) //
// console.log(myDate.toJSON()) //
// console.log(myDate.toLocaleDateString()) // It will only give date at MM/DD/YYYY format
// console.log(myDate.toLocaleString()) // It will output with the Date and Time

// 

let myCreatedDate = new Date(2023,0,23)  //In single digit month will be started from 0 in Js
console.log(myCreatedDate.toDateString())

let myDate1 = new Date(2023,0,23,5,3) // The 5 and 3 are the hours and minutes it will automatically thake in that format
console.log(myDate1)

let myDate2 = new Date("2023-01-14") // It will take 01 if we are writing in MM format 
console.log(myDate2)

let myDate3 = new Date("01-14-2023") // Indian format date
console.log(myDate3)

// Time Stamp

let myTimeStamp = Date.now()

console.log(myTimeStamp)  // Giving output in miliseconds which start from 1st January 1970
console.log(myDate3.getTime())

// Coverting Date from milisecond to Seconds IMP interview question

let mili = Date.now()

console.log(Math.floor(mili/1000))