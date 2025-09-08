const person = ["amit", "sumit", "manas", "mansi", "ram"]

const values = person.forEach( (item) => {
    // console.log(item)
    return item
    // forEach() doesn't return anything
} )
console.log(values);    //undefined

// ** Filter in JS ** 
// filter(callback)
const nums = [1, 3, 5, 7, 9]

// nums.filter( (num) => num > 4)
const newNum = nums.filter( (num) => num > 4)
console.log(newNum);    //[5,7,9]
// OR--with scope
const newNums = nums.filter( (num) => {
    // num > 4 
    return num > 4
} )
console.log(newNums);
// using foreach
const numbers = []
nums.forEach( (num) => {
    if(num > 4) {
        numbers.push(num)
    }
})
console.log(numbers);

// Example
const books = [
    {title: 'Book one', genre: 'Science', publish: 1989, edition: 1993},
    {title: 'Book two', genre: 'fiction', publish: 2001, edition: 2005},
    {title: 'Book three', genre: 'history', publish: 1997, edition: 2000},
    {title: 'Book four', genre: 'Science', publish: 1992, edition: 1996},
    {title: 'Book five', genre: 'fiction', publish: 2007, edition: 2014}
]

let userBooks = books.filter( (bk) => bk.genre === 'Science')

userBooks = books.filter( (bk) => {
    return bk.genre === 'Science' && bk.publish < 1990
})

console.log(userBooks);


