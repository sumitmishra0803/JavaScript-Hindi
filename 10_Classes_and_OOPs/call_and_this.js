function setUsername(username) {
  // complex DB Calls
  this.username = username;
}

function createUser(username, email, password) {
  setUsername.call(this, username);
  // this.username = username
  this.email = email;
  this.password = password;
}
