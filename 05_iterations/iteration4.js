// for in loop

// iteration on objects
const myLang = {
    js : "javascript",
    cpp : "C++",
    py : "Python",
    rb : "ruby"
}

for (const lang in myLang) {
    console.log(`${lang} is shortcut for ${myLang[lang]}`);
}

// iteration on arrays
const programming = ["js", "rb", "py", "cpp"];

for (const key in programming) {
    // console.log(key);
    console.log(programming[key]);
}

// ***** FOR-EACH LOOP *****

const things = ["laptop", "box", "clock", "notes"]

// forEach(callback)
things.forEach( function (val){
    console.log(val);
}   )
    // OR
things.forEach( (item) => {
    console.log(item);
} )
    // OR
function printThings(items) {
    console.log(items);
}
things.forEach(printThings)
    // OR

things.forEach( (items, index, arr) => {
    console.log(items, index, arr);
} )


// Example
const student = [
    {
        name:"Sumit",
        age:20
    },
    {
        name:"Amit",
        age:21
    },
    {
        name:"Manas",
        age:22
    },
]

// item --> {}
student.forEach( (item) => {
    console.log(item);
    console.log(item.name);
} )

