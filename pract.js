/*

function ageChecker(a){
    if(a>18){
        console.log("You are eligible for voting")
    }
    else if(a == 18){
        return `${a} You are eligible for voting`
    }
    else{
        console.log("Wait for atleast to be 18 years")
    }
}

ageChecker(18)

let prath = function majorMinor(t,s){
    if(t>s){
        return `${t} is Greater than ${s}`
    }
    else if(t==s){
        return `${t} and ${s} both are of same age`
    }
    else if(s>t){
       return `${t} it is greater than A`
    }
}

prath(15,13)

// Odd OR Even

function prathu(n){
if(n%2==0){
    console.log("Entered Number Is Even")
}
else{
    console.log("Entered Nuimber Is Odd")
}
}

prathu(5)

// Gender

function gender(g){
    if(g=="Male"){
        console.log("You Are Male")
    }
    else if(g=="Female"){
        console.log("You Are Female")
    }
    else{
        console.log("You Are Awesome")
    }
}

gender('Male')

// Product of 10 Numbers of Entered Number

function product(num){
    var i = 1
    while(i<=10){
        console.log(i*num)
        i++
    }
}

product(3)

// Odd and Even Of 10 Numbers from 1 to 10

function oddEven(){
    let i = 1
    while(i<=10){
        if(i%2==0){
            console.log("Entered Number Is Even: ",i)
        }
        else{
            console.log("Entered Number Is Odd ",i)
        }
        i++
    }
}

oddEven()
*/
// Factorial of a number

function fact(num){
    let fact = 1
    console.log(fact)
    while(num>0){
        fact = num*fact
        num--
    }
    console.log(fact)
}

fact(5)


// Sum and Product Of 10 Numbers

function sumProd(num){
    let i=0
    sum = 0
    prod = 1
   while(i<=10){
    let sum =+ num
    // let prod = num
    i++
   }
}

sumProd(5)

// Sum of 10 using For Loop

function sumTen(){
    console.log("Sum of 10 numbers starting")
    var i = 1
    let sum = 0
    while(i<=10){
        sum = sum + i
        console.log(sum)
        i++
    }
    console.log( `Sum of 10 Numbers is ${sum}`)
}
sumTen()


// Function Using Arrow Operator
console.log("\nArrow Function In Functions\n")
const test = (num5) => {
    if(num5%2==0){
        console.log("Entered Number Is Prime")
    }
    else{
        console.log("Entered Number Is Odd")
    }
}

test(3)

console.log("Arrow Function In Functions :Part 2\n")

const test2 = () => {
    var sum = 0
    for(i=1;i<=10;i++){
        sum = sum + i
    }
    console.log(`Sum of 10 Numbers Are ${sum}`)
}

test2()