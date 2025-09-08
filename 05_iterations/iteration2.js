// while loop
let x = 0
while (x <= 10) {
    console.log(`Value of x is ${x}`);
    x = x + 2;
}

let heroes = ["flash", "ironman", "batman"];

let hero = 0;
while (hero < heroes.length) {
    console.log(`Superhero ${hero+1}: ${heroes[hero]}`);
    hero = hero + 1;
}

// do-while loop
let score = 11;
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);