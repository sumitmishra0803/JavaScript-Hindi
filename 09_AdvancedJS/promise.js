const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete!");
    resolve(); //resolve connect with then()
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

// Promise 2
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved!");
});

// Promise 3
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// Promise 4
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "hitesh", password: "1223" });
    } else {
      reject("ERROR: Something went wrong!");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username; //return to the next then in chain
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

// Promise 5
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "JavaScript", password: "1223" });
    } else {
      reject("ERROR: JS went wrong!");
    }
  }, 1000);
});
// new syntax -> async,await
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// JSON Response --> Behind the scene
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); //promise
    // console.log(response);
    const data = await response.json(); //typecast
    // json me convert hone ke liye bhi time lagta h isliye isko bhi await me dalna padega
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}

getAllUsers();

// Same code, with then() and catch()
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// Learn more about fetch!
// Visit -> https://blog.logrocket.com/fetch-api-node-js/


