// Comparisons
// Result is always boolean
// Numbers:
console.log(5 > 4); // true
console.log(4 > 5); // false
console.log(5 >= 5); // true
console.log(5 > 5); // false
console.log(5 == 5); // true
console.log(5 != 5); // false

// String comparison
// Lexicographical order in the sense of Unicode order
console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true

// Compare different types
// Implicit type conversions
console.log( '2' > 1 ); // true, string '2' becomes a number 2
console.log( '01' == 1 ); // true, string '01' becomes a number 1
console.log( true == 1 ); // true
console.log( false == 0 ); // true

// Strict comparison
// Without an implicit conversion
console.log( 0 === false ); // false, because the types are different
console.log( null === undefined ); // false
console.log( null == undefined ); // true