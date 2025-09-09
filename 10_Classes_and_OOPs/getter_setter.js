class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  // name of the property must be different(passcode)

  set email(value) {
    this._email = value;
  }

  get password() {
    return this.passcode.toUpperCase();
    // name of the property must be different(passcode)
  }

  set password(value) {
    this.passcode = value;
  }
}

const sumit = new User("sumit@edu.in", "abc");
console.log(sumit.password);
console.log(sumit.email);
