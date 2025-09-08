// for loop

for (let index = 0; index <= 5; index++) {
    const element = index;
    console.log(element);
}

// console.log(element);

// Nested loop
for(let i = 1; i <= 10; i++){
    console.log(`Outer loop value: ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

// array example
let myArr = ["thor", "hulk", "loki"];
console.log(`The length of array is :${myArr.length}`);
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}

// break 
for (let i = 1; i <= 7; i++) {
    if(i === 5){
        console.log("Detected 5!");
        break
    }
    console.log(`Value of i is ${i}`);
}
// continue
for (let i = 1; i <= 7; i++) {
    if(i === 5){
        console.log("Detected 5!")
        continue
    }
    console.log(`Value of i is ${i}`);
}