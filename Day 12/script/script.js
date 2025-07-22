window.alert("Welcom In My Website");
console.log("Welcom In My Website");
document.write("Welcom In My Website");
// --------------------------------------------------------------------------------------------------
let person_age = 20;
person_age += 5;
console.log(`Updated age: ${person_age}`);
// --------------------------------------------------------------------------------------------------


let stringVar = "Hello";
let numberVar = 42;
let booleanVar = true;
let undefinedVar;
let nullVar = null;
// --------------------------------------------------------------------------------------------------

console.log(`String: ${stringVar}, Type: ${typeof stringVar}`);
console.log(`Number: ${numberVar}, Type: ${typeof numberVar}`);
console.log(`Boolean: ${booleanVar}, Type: ${typeof booleanVar}`);
console.log(`Undefined: ${undefinedVar}, Type: ${typeof undefinedVar}`);
console.log(`Null: ${nullVar}, Type: ${typeof nullVar}`);

// --------------------------------------------------------------------------------------------------

let integer = 42;
let float = 3.14;
let sum = 10 + 5;
let product = 7 * 3;
let squareRoot = Math.sqrt(25);
let divisionResult = 15 / 4;

// --------------------------------------------------------------------------------------------------

let numberAsString = "90";
let convertedNumber = parseInt(numberAsString);

// --------------------------------------------------------------------------------------------------

let singleQuote = 'Single quotes';
let doubleQuote = "Double quotes";
let templateLiteral = `Template literal with ${numberVar}`;

// --------------------------------------------------------------------------------------------------

let fullName = "omar";
console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.substring(0, 4));
console.log(fullName.charAt(3));
console.log(fullName.indexOf("ar"));
// --------------------------------------------------------------------------------------------------


let firstName = "omar";
let lastName = "khalid";
let fullNameConcat = firstName + " " + lastName;
let fullNameTemplate = `${firstName} ${lastName}`;
// --------------------------------------------------------------------------------------------------

console.log(fullNameTemplate);
// --------------------------------------------------------------------------------------------------


console.log("Web"[2]);
console.log("I'm Learn Web Development, \"Using React.\"");
console.log("Up up\n\tdown down");
// --------------------------------------------------------------------------------------------------


const myString = "a";
console.log(myString.charCodeAt(0));
// --------------------------------------------------------------------------------------------------


let a = 10, b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a++);
console.log(++a);
console.log(a ** b);

// --------------------------------------------------------------------------------------------------

console.log(10 < 6);
console.log(10 > 6);
console.log(10 <= 6);
console.log(10 >= 6);
console.log(10 == "10");
console.log(10 === "10");
console.log(10 != "10");
console.log(10 !== "10");

// --------------------------------------------------------------------------------------------------

console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(false || false);
console.log(!true);

// --------------------------------------------------------------------------------------------------

let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);

// --------------------------------------------------------------------------------------------------

let num = 10;
if (num > 0) {
    console.log("Number is positive");
}
// --------------------------------------------------------------------------------------------------


if (num > 0) {
    console.log("Number is positive");
} else if (num < 0) {
    console.log("Number is negative");
} else {
    console.log("Number is zero");
}

// --------------------------------------------------------------------------------------------------

let userAge = 20;
let hasLicense = true;

if (userAge >= 18) {
    if (hasLicense) {
        console.log("You can drive.");
    } else {
        console.log("You need a license to drive.");
    }
} else {
    console.log("You are too young to drive.");
}

// --------------------------------------------------------------------------------------------------

let dayOfWeek = "Monday";

switch (dayOfWeek) {
    case "Monday":
        console.log("It's the start of the week");
        break;
    case "Friday":
        console.log("Weekend is approaching");
        break;
    default:
        console.log("Some other day");
}

// --------------------------------------------------------------------------------------------------

for (let i = 0; i < 5; i++) {
    console.log(i);
}
// --------------------------------------------------------------------------------------------------


let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}
// --------------------------------------------------------------------------------------------------


let k = 0;
let result = "";
do {
    k += 1;
    result += k;
} while (k < 5);
console.log(result);


function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("omar");

// --------------------------------------------------------------------------------------------------

function add(p1, p2) {
    return p1 + p2;
}
let sumResult = add(5, 3);
console.log(sumResult);

// --------------------------------------------------------------------------------------------------

const multiply = (a, b) => a * b;
console.log(multiply(4, 5));

// --------------------------------------------------------------------------------------------------

let person = {
    firstName: "omar",
    lastName: "khalid",
    age: 20,
    profession: "Developer",
    greet: function () {
        console.log(`Hello, my name is ${person.firstName}`);
    }
};
// --------------------------------------------------------------------------------------------------

console.log(person.firstName);
console.log(person["lastName"]);
person.greet();