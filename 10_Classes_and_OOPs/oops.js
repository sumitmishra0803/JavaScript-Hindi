// Object Literals
const user = {
  username: "Sumit",
  loginCount: 5,
  signedIn: true,

  getUserDetails: function () {
    console.log("got user details from database!");
    // console.log(`Username:${username}`)  --> username undefined?
    console.log(`Username:${this.username}`);
    console.log(this); // --> this object
  },
};

console.log(user.username);
console.log(user.getUserDetails());
console.log(this); // {} --> nothing in global context

// @@@ constructors @@@
// const promiseOne = new Promise();
// new --> constructor function, ek obj se mult. instances

function User(username, loginCount, isLoggedIn) {
  // username = username --> right wala variable h!
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this; // passed on the object in which the above data are stored
}

const userOne = new User("Sumit", 7, false);
const userTwo = new User("Chai aur Code", 3, true);
// It will overwrites the code , which is not good!-->>
console.log(userOne);
console.log(userTwo);
// --->>>
// @ That's why we need constructor function(new) to make new instance everytime

console.log(userOne.constructor);
// reference for object itself

// ** instanceof method **
    //example:- car instanceof vehicle
