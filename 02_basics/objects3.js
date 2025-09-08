const course = {
    courseName : "JS in Hindi",
    price : "999",
    courseInstructor : "Hitesh Choudhary"
}

// course.courseInstructor
const {courseInstructor} = course
// or const {courseInstructor : instructor} = course
console.log(courseInstructor);

const {courseName : name} = course
console.log(name);

// JSON
// {
//     "name" : "Hitesh",
//     "courseName" : "JS in Hindi",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]