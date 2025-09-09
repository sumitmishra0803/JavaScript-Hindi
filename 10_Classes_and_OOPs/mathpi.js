const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);

// console.log(Math.PI);  // 3.14
// Math.PI = 4;
// console.log(Math.PI); // 3.14 (no changes)

// const newObject = Object.create(null)

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function(){
    console.log("chai nahi bani!")
  }
};

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// you can control to define/change properties
Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}
