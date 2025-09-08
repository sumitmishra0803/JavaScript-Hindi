const myNums = [1, 2, 3, 4]
// accumulator, currentValue
const total = myNums.reduce( function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
 // 0 -->initial value of accumulator

console.log(total);

    // OR

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)
console.log(myTotal);

// Another Example
const shoppingCart = [
    {
        itemName : 'js course',
        price : 3999
    },
    {
        itemName : 'py course',
        price : 2499
    },
    {
        itemName : 'ds course',
        price : 5100
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);

