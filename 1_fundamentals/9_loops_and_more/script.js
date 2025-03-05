// Loops:

// For loop
for(let i = 0; i < 10; i++) console.log(i);
for(;false;) console.log("endless loop");

// While loop
let i = 1;
while(i > 0){
    console.log("Some while loop");
    i--; 
}

// Do ... while loop
do{
    console.log("do .. while loop");
} while (false); // Always one or more iterations

// break
while(true){
console.log("Breakable loop");
break;
}

// breaking nested loops
outer: while(true){
    console.log("outer loop");
    while(true){
        console.log("inner loop");
        break outer;
    }
}
// outer is label
// break outer escapes from
// labeled block of code

someCode: {
    console.log("It shows");
    break someCode;
    console.log("but it does not");
}

// switch case
let a = 3;
switch(a) {
    case 1:
        console.log("a = 1");
        break;
    case 2:
    case 3:
        console.log("a = 2 or a = 3");
        break;

    default:
        console.log("other value");
        break;
}