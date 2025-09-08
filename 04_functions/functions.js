// Example 1
function printMyName(){
    console.log("Sumit Mishra")
}
printMyName()

// Example 2
function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}

addTwoNumbers(3, 4);

// Example 3
function myFunc(a , b) {
    return a * b;
    console.log("This line will not print")
}

const result = myFunc(5,2);
console.log("Result :",result);

// Example 4
function loginUser(username){
    if (username == undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in!`
}

console.log(loginUser());
console.log(loginUser("sumitrmishraa"));


