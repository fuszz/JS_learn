let something = 5;

// Simple if - else if - else instructions
if(something == 5){
    console.log("It's 5!");
} else if (something > 5){
    console.log("Don't be too greedy!");
} else {
    console.log("Take 5!");
}

// Conditional operator ?
let a = (something == 5) ? 5 : 2; 
console.log(a);

let accessAllowed = something > 18 ? true : false;
// It's the same as:
accessAllowed = something > 18; 