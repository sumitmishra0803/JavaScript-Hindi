// 1 - named iife
(function chai(){
    console.log("DB Connected!");
})();

// 2 - unnamed iife
( () => {
    console.log("DB Connected Two!");
} )();

// 3 - parameterised iife
( (name) => {
    console.log("DB Connected Three!",name);
} )("Sumit");



// ';' is necessary to execute next line code
