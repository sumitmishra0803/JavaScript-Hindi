class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
  //   prevent access to anyone
  static createId() {
    return `123`;
  }
}

const hitesh = new User("hitesh");
// console.log(hitesh.createId()); //error

class Sumit extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const bhaiya = new Sumit("Sumitrmishraa", "sumit@gmail.com");
bhaiya.logMe();
bhaiya.createId(); //error
