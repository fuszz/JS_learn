// Math operators:
console.log(5 % 2); // Remainder, 1
console.log(5**2); // Exponentiation, 25


// String
console.log("Jan "+"Kowalski"); // Concatenation
console.log(7 + " Apples"); // Concatenation with implicit type conversioning
console.log(7 * " Apples"); // Not a Number (NaN)

// Adding vs concatenation
console.log('1' + 2 + 2); // 122, concatenation first
console.log(2 + 2 + '1'); // 41, adding's first, then concatenation

// Unary + operator

// Doesn't affect numbers:
console.log(+1); // 1
console.log(+(-2)); // -2

// If the operand isn't number, 
// + convert operand into it
console.log(+true); //1
console.log(+""); // 0
console.log(+"0"); // 0
console.log(+'ada'); //NaN

// Operators precedence is prettty complicated, 
// Just Google when need it. 

// All operators in JS returns some value, even =. 
// Assignment like
let a = 10; 
let b = 1;
// Writes 10 under the a and returns the value, so:
let c = 7 - (b = a + 2);
// Works
console.log("a = ", a);
console.log("b = ", b)
console.log("c = ", c);

// Assignment chains
let x = y = z = 2 - 2;
console.log(x); // 0
console.log(y); // 0
console.log(z); // 0

// In-place modifications:
let n = 2;
console.log(n += 2); 
console.log(n *= 3);
console.log(n *= 3);

console.log(n++);
console.log(n--);

// ++n and n++ is not the same!
// ++n increments and returns incremented value
// n++ returns value and then increments it
console.log(2 * ++n);
console.log(2 * n++);

// Bitwise operators
// AND & 
// OR |
// XOR ^
// NOT ~
// LEFT SHIFT <<
// RIGHT SHIFT >>
// ZERO-FILL RIGHT SHIFT >>>> 

// Comma
// Allows us to evaluate several expressions, 
// but only last result is returned, f.ex.:
let m = (1+2, 3+4)
console.log(m);
// Brackets are pretty important:
m = 1 + 2, 3 + 4;
console.log(m);
