function calcCartPrice(...num1){
    return num1
}

console.log(calcCartPrice(200,400,600));
// [200, 400, 600]

function cartPrice(val1, val2, ...num1){
    return num1
}

console.log(cartPrice(100, 200, 400, 500))
// [400, 500]

// FUNCTIONS WITH OBJECTS
const user = {
    username : 'Hitesh',
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
}
handleObject(user);

handleObject({
    username : "Sumit",
    price : 200
})

// FUNCTIONS WITH ARRAYS
const mynewArr = [123, 246, 492]

function returnSecValue(getArray){
    return getArray[1]
}
console.log(returnSecValue(mynewArr));
