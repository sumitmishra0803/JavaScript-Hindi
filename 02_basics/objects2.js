// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123@abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const fbUser = {
    email : "jasoos@gmail.com",
    fullname:{
        userFullName:{
            firstName : "Sumit",
            lastName : "Mishra"
        }
    }
}
console.log(fbUser.fullname.userFullName);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}

const obj3 = {obj1, obj2}
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2) //{} => target, obj1,obj2 => Source
console.log(obj4);

const obj5 = {...obj1, ...obj2}
console.log(obj5);

// array of objects
const user = [
    {
        id:1,
        email: "name@gmail.com"
    },
    {
        id:2,
        email: "name@gmail.com"
    }
]
console.log(user[1].email)

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

