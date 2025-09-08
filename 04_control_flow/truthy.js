const userEmail = "h@hitesh.ai"
if (userEmail){
    console.log("Got user email");
} else {
    console.log("Dont have user email");
}

// falsy values --> 0, false, -0, BigInt 0n, "", null, undefined, NaN

// truthy values --> "0", "false", " ", [], {}, function(){}, Everthing except falsy values

const emptyArr = []

if(emptyArr.length === 0){
    console.log("Array is empty!");
}

// example
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}