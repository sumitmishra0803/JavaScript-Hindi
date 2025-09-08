const balance = 1000;
if(balance > 500){
    let power = "fly";
    console.log(`User Power : ${power}`);
}
// console.log(`User power: ${power}`); 
//"power" is not defined

// implicit scope
const price = 1000
if(price > 100) console.log("Buy Now"),console.log("Add this");
// this is not a good way!!

// nested statements
if(price < 500){
    console.log("less than 500");
} else if(price < 750){
    console.log("less than 750");
} else{
    console.log("greater than 750");
}

// Example
const userLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInfromEmail || loggedInfromGoogle){
    console.log("User Logged In!");
}


// Nullish Coalescing Operator (??): null/undefined -- IMP*

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15

console.log(val1);

// terniary Operator
const iceTeaPrice = 100

iceTeaPrice <= 50 ? console.log("Buy") : console.log("Don't buy");

 
// This is the end.....