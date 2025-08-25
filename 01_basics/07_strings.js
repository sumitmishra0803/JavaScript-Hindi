const name = "hitesh";
const repoCount = 50;

console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Pokemon")
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.at(1));
console.log(gameName.charAt(2));
console.log(gameName.indexOf);

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "  hitesh  ";
console.log(newStringOne);
console.log(newStringOne.trim);

const url = "https://hitesh.com/hitesh%20chaudhary.com";
console.log(url.replace);
console.log(url.includes("sundar")); //it returns boolean value

let sent = "The quick brown fox jumps over the lazy dog."
console.log(sent.split(" "));







