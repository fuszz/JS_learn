function someFunction() {
  console.log("Hello world, but from some function");
}

function theOtherFunction(callerName) {
  console.log(`Hi, ${callerName}`);
}

function lastFunction() {
  theOtherFunction("lastFunction");
  someFunction();
}

function sumSomeRubish(element1, element2) {
  return element1 + element2;
}

lastFunction();
let result = sumSomeRubish(1 + 2, 3);
console.log(result);

let anotherResult = sumSomeRubish(sumSomeRubish("Ala", " ma"), " kota");
console.log(anotherResult);

// Function Expression
// We can define function as variable:
let showConsoleMessage = function (message) {
  console.log(message);
};

// Print content of variable
console.log(showConsoleMessage); // [Function: showConsoleMessage]

// Print code of function
console.log(String(someFunction));

// Alert shows code of someFunction in web browser
// alert converts variable to string implicitly
// alert(someFunction)

// Arrow function
// We can define function in the other way:
function sum(element1, element2) {
  return element1 + element2;
}

// as:
let funcSum = (element1, element2) => element1 + element2;

// or:
let funcSum2 = (element1, element2) => {
  let result = element1 + element2;
  return result;
};

// It's the same, but arrow function is shorter way
console.log(sum(1, 2), " ", funcSum(1, 2), " ", funcSum2(1, 2));
