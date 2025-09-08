// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sumit",
    "fullname" : "Sumit Mishra",
    age: 20,
    profession : "Student",
    email : "mishraa@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ['Monday','Tuesday','Friday'],
    [mySym] : "myKeys1",
}

console.log(JsUser.email);
console.log(JsUser["email"]);
// console.log(JsUser."fullname"); //wrong
console.log(JsUser["fullname"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email = "sumit@gmail.com"
// Object.freeze(JsUser);  //immutable

JsUser.email = "sumitssips@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JSUser");
}

JsUser.greetingTwo = function(){
    console.log(`Hey!Js User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



