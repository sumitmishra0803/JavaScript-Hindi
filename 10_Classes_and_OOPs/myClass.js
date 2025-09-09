// After ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  userCaps() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("Chai", "chai@gmail.com", "123");
console.log(chai.encryptPassword());
console.log(chai.userCaps());

// BEHIND THE SCENES

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.userCaps = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User("tea", "tea@gmail.com", "456");
console.log(tea.encryptPassword());
console.log(tea.userCaps());
