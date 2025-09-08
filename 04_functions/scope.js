var c = 300  //global scope

if(true){
    let a = 10
    const b = 20
    var c = 30  //local scope
}

// console.log(a); //ERROR
// console.log(b); //ERROR
console.log(c);  // 30

// Part 2- Nested functions
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
    console.log("after executing function two")
}

one()

// ********** INTERESTING **********
addOne(5)
function addOne(num){
    return num + 1
}

addTwo(6)
const addTwo = function(num){
    return num + 2
}