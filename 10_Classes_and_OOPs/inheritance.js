class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

// extends --> __proto__
class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@teacher.com", "1234");
chai.addCourse();

const masalaChai = new User("masalaChai");
masalaChai.logMe();


console.log(chai === masalaChai); //false
console.log(chai === Teacher); //false

console.log(chai instanceof Teacher); //true
