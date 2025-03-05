// OR operator
let a = true || false;
console.log(a); // true
// Lazy evaluation, it means that comparison stop when first true 
// value found. 

true || console.log("second"); // Doesn't display
false || console.log("second - second"); // Displays

// AND operator
a = true && false; 
console.log(a) // false; 
// Lazy evaluation too, it finds first falsy value

// NOT operator
// It has the highest priority from the logical operators
console.log(!a); // true, because of falsy a. 

// ?? - nullish coalescing operator
let x = 3, y;
let n = y ?? x; // if y is defined, y <- a. Else it's b. 
console.log(n);

// The same expression:
n = (y !== null && y !== undefined) ? y : x;
