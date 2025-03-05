let user = {
    name: "Jan",
    surname: "Kowalski",
}; 

// We can define user's method like this:
user.sayHi = function () {
    console.log("Dzień dobry!");
}

// We can do it in a different way:
// Define an ordinary function
function sayGoodbye(){
    console.log("Do widzenia!");
}
// And link it to the object:
user.sayGoodbye = sayGoodbye; 

user.sayHi();
user.sayGoodbye();

// We can create an object with methods inside:

let user2 = {
    name: "Adam", 
    surname: "Nowak", 

    sayHi(){
        console.log("Siemano!");
    },

    sayGoodbye(){
        console.log("Elo!");
    },

    introduceYourself(){
        console.log(`I'm ${this.name} ${this.surname}, nice to meet you.`)
    }
    // Use `this` keyword for access the object itself
    // Arrow functions are restricted on using `this`
    // They use `this` of the outer scope (caller)
}

user2.sayHi();
user2.introduceYourself();
user2.sayGoodbye();