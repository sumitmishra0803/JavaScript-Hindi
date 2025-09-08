const nums = [1,2,3,4,5,6,7,8,9]

const newNums = nums.map( (num) => {return num + 10})
console.log(newNums);

// Chaining
const numbers = [1,2,3,4,5,6,7,8,9,10]

const newNumbers = numbers
                        .map( (num) => num * 10) //[10,20,30,...]
                        .map( (num) => num + 1)  //[11,21,31,...]
                        .filter( (num) => num > 40)
console.log(newNumbers);