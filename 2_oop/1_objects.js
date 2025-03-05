// Two methods of defining objects
let user1 = new Object();
let user2 = {};

// Properties
// Key: value format
// Key can be any string of characters, even reserved words!
// We can set properties while constructing object
let user3 = {
  name: "Jan",
  surname: "Kowalski", // trailing comma - it easies object modifying
};

// or add properties to defined object:
user2.name = "Jan";
user2.surname = "Kowalski";
console.log("user2: ", user2);
console.log("user3: ", user3);

// Delete property:
console.log("Delete name of user2");
delete user2.name;
console.log("user2: ", user2);

// Multiword properties are allowed in JavaScript:
// Define them in such way:
console.log("Add fourth user");
let user4 = {
  name: "Jan",
  surname: "Kowalski",
  "likes cockatiels": true,
};
console.log("User 4: ", user4);

// or modify the object, but
// user4."likes cockatiels" = true;
// will raise an error. Instead:
user4["loves cockatiels"] = true;
delete user4["likes cockatiels"];
console.log(user4["likes cockatiels"]); //undefined, property removed
console.log("User 4: ", user4);

// We can take the property name from the variable too.
// It's called computed property:
let key = "Some hopsasa name";
let user5 = {
  [key]: true,
};
console.log("Fifth user added successfully");
user5[key + " the second"] = "Yes";
console.log("User5: ", user5);

// Define object - returning function
function makeUser(name, surname) {
    return {
        name: name,
        surname: surname,
    }
}

// Or shorter:
function shorterMakeUser(name, surname){
    return {
        name,
        surname,
    }
}

let user6 = makeUser("Adam", "Nowak");
let user7 = shorterMakeUser("Adam", "Nowak");
console.log("User6 and User7 added!\nuser6: ", user6, "\nuser7: ", user7);

// Check if property exists:
console.log("Check if user1.name exists: ", ("name" in user1) ); // false
console.log("Check if user2.name exists: ", ("name" in user3) ); // true

// For loop for object's properties:
for(let attribute in user3){
    console.log(attribute, user3[attribute]);
}
// Integer properties (where the key is an integer number) are
// stored increasingly. The other ones in the creation order. 

// When creating an object, we stores reference to it. 
let reference1 = new Object();
let reference2 = reference1;
reference1.accessed = "reference1";
console.log("reference2: ", reference2); 

// For create copy of an object, we need to clone it:
let reference3 = new Object();  // Create new object
for(let key in reference1){ // Copy all properties into it
  reference3[key] = reference1[key];
}

reference1.age = "old";
reference3.age = "new";

console.log("\n\nObject cloned succesfully")
console.log("Old object reference1: ", reference1);
console.log("New object reference3: ", reference3);

// We can use Object.assing() method too
let reference4 = new Object(); 
Object.assign(reference4, reference1);
console.log(reference4);

// If our object's properties are objects too, we need to use 
// deep cloning (structured cloning):
let user8 = structuredClone(user5);
console.log(user8);

// Garbage collection:
// We don't delete objects explicitly. JavScript's garbage collector
// do it for us, when we lost the last reference to an object. 