// Dynamically-typed language

// 1. Number (integer or floating-point)
// constraints: < - 2^53, 2^53 > for accurate 
// bigger values are possible, but with an approximation
let n = 111
n = 11.1
// All mathematical operations are safe
// We have Infinity, -Infinity and NaN values.
console.log(n / 0);

// 2. BigInt
// Can store precisely bigger numbers
// append n to the end of the number to make it BigInt
let bigInt = 9999999999999999999999999999999999999999999999999999n;

// 3. String
// There're three types of it:
// - "String" and 'String' - almost the same
// `String` - extended functionality quote. We can 
// format such string, for example:
const someName = "John";
console.log(`Hello, ${someName + someName}`)

// 4. Boolean - true and false
let t = true;
let f = false;

// 5. Null
let somethingUnknown = null;
console.log(somethingUnknown)

// 6. undefined
// default type for undassigned things, 
// you can explicitly assign it, but it's not recommended
let somethingUndefined;
console.log(somethingUndefined);

// 7. Object - covered later

// Operator typeof - returns the type of the operand
console.log(typeof 0);
console.log(typeof someName);
console.log(typeof(someName)); // The same as typeof someName