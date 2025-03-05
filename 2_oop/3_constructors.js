// We can create our own constructors.
// Technically they're regular functions
// Be aware: we don't use key: value syntax here, but
// this.<key> = <value>; 

function User(name) {
    // this = {}; implicitly

    this.name = name;
    this.isPriviliged = false;

    // return [this - optional]; implicitly
}

let user1 = new User("Jack");
// When a function is executed with new, it does the following steps:
//  1. A new empty object is created and assigned to this.
//  2. The function body executes. 
//  3. The value of this is returned.

console.log(user1);