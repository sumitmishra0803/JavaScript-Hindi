// let myName = "sumit     "
// let drink = "chai      "

// console.log(myName.trim().length);
// console.log(myName.trueLength);

let myHeroes = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log("hitesh is present in all objects!");
};
//now hitesh is present in all objects!Anyone can access it!
heroPower.hitesh();
// NOW check,is it accessible with array
myHeroes.hitesh(); // YESSS!!!

Array.prototype.heyHitesh = function () {
  console.log("Hitesh within arrays");
};
// Only with arrays
myHeroes.heyHitesh();
// heroPower.heyHitesh()  //errorrr!!!

// @@*** Inheritence  ***@@

const User = {
  name: "sumit",
  email: "sumit@gmail.com",
};

const teacher = {
  makeVideo: true,
};

const teachingSupport = {
  isAvailable: true,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: teachingSupport,
};
// Can also use it in out of the object
teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher);

let anotherUsername = "ChaiAurCode      ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True Length is ${this.trim().length}`);
};

anotherUsername.trueLength();
"hitesh".trueLength();
