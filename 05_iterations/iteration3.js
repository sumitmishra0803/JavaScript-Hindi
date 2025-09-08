// **** High-Order Array Loops ****

// for of

    // [" ", " "," "]
    // [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for(const num of arr){
    console.log(num);
}

const greetings = "Hello world!"
for(const greet of greetings){
    if(greet === " "){
        continue
    }
    console.log(greet);
}

// MAPS

const map = new Map()
map.set("IN",91)
map.set("US",52)
map.set("UK",31)
map.set("IN",91) //duplicate

console.log(map);

for(const [key,value] of map){
    console.log(key, ':-', value);
}

// 'for in' on map
for (const key in map) {
    console.log(key);
} //not iterable


// for of on objects
const myObj = {
    'game1' : 'NFS',
    'game2' : 'Asphalt'
}
for(const [key,value] of myObj){
    console.log(key, ':-', value);
} //myObj is not iterable


