// THIS KEYWORD & ARROW FUNCTIONS

const user = {
    username : "Hitesh",
    price : 999,
    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
          
    }
}

user.welcomeMessage();
user.username = "Sumit"

user.welcomeMessage();

// console.log(this); //{}

// this in functions
function chai(){
    let username = "hitesh"
    console.log(this.username); //undefined
}

chai()

// arrow functions
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(4, 5));

// OR try Implicit return (for single statement functions)
const addTwoNum = (num1, num2) => (num1 + num2)
console.log(addTwoNum(5,6));

// arrow func with objects
const obj = () => ({
    username:"Sumit",
    age:20
})
console.log(obj());
