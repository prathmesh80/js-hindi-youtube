const score = 400
// console.log(score);

const balance = new Number(100)   // We can use "new" for datatype declaration
// console.log(balance);

let convert = balance.toString();   // This method will convert number to string
// console.log(convert);
// console.log(typeof(convert));
// console.log(convert.length);

// console.log(balance.toFixed(2))  // This will give the ouput like 100.00 coz it adds the decimal after the number ends

// const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3));  // It will give the round off value of the digit it defined in the parameter

let hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // By default it is set to USA Standards if we want for country give country code like 'en-IN'

// ******************** Maths **********************

console.log(Math)

console.log(Math.abs(-4)); // This will only convert Negative to Positive BUT NOT Postive to Negative

console.log(Math.round(4.6)); // This will give the Round off value

console.log(Math.ceil(3.2)); // This will give the upper value whether the decimal is .1 also OP: 4

console.log(Math.floor(5.9)); // This will give the lower value whether the decimal is 4.9 also OP: 5

console.log(Math.min(4,3,6,8)); // Min function is used to give the minimum value from the array

console.log(Math.max(4,3,6,8)); // Max function is used to give the maximum value from the array


// Random Function Of Maths

console.log(Math.random()); // This is the random fdunction which gives values between 0 and 1 and both 0 and 1 is included

console.log((Math.random()*10)); // According to you multiply by 10,100,1000 to take the values in INT

console.log((Math.random()*10) + 1);  // This is used to avoid 0 in the output

// If you want to get the Value between 2 values then this is used

const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // This is the formula used to get the value in desired range
