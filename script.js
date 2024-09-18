// JAVASCRIPT VARIABLES

// var firstname = "hello there";
// console.log(firstname);

// var lastname = "smith";
// console.log(lastname);

// var age = 30;
// console.log(age);

// var isCompleted = true;
// console.log(isCompleted);

// var job;
// console.log(job);

// var school = null;
// console.log(school);

// variables are containers that are responsible for
// holding values of different data types, and these containers
// can be used in any part of our code

// MUTATION

// 1. ParseInt
// 2. Number

// var a = 10 + 10;
// console.log(a);

// var b = 10 + Number("18");
// console.log(b);

// var firstname = "John";
// var lastname = "smith";
// var age = 30;

// OPERATORS

// operator allow you to perform arithmetic operation in any programming.
// var year, johnYear, markYear;

// var ageJohn = 29;
// var ageMark = 24;

// var now = 2024;

// var johnYear = now - ageJohn;
// var markYear = now - ageMark;

// var multiply = now * ageJohn;
// var divide = now / ageMark;

// var x = 10;
// var y = 1;

// y *= 5;

// // y = 1 * 5
// y = y * 5;

// console.log(y);

// console.log(multiply);
// console.log(divide);

// console.log(johnYear);
// console.log(markYear);

// IF/ELSE STATEMENT and BOOLEAN VALUES ()
// var firstname = "John";
// var civilStatus = "married";

// if (civilStatus == "Single") {
//   console.log(firstname + " is single");
// } else {
//   console.log(firstname + " is married");
// }

// var weather = "sunny";

// if (weather == "sunny") {
//   console.log("Go swiming");
// } else {
//   console.log("Don't go swiming");
// }

// var johnAge = 30;
// var mikeAge = 40;

// var isJohnEmployed = true;
// var isMikeEmployed = false;

// if (isJohnEmployed && isMikeEmployed) {
//   console.log("they are both employed");
// } else if (!isJohnEmployed && isMikeEmployed) {
//   console.log("Only mike is employed");
// } else if (!isJohnEmployed && !isMikeEmployed) {
//   console.log("they are both unemployed");
// } else {
//   console.log("I don't really know their employment status");
// }

var year;

// FUNCTION
// function addNumber(birthYear) {
//   return 2024 - birthYear;
// }

// console.log(addNumber(1995));

// CREATE A FUNCTION THAT SUBTRACT TWO
// NUMBERS and make use of the return statement

// ARRAY
let MikeHousesLocation = ["Abuja", "Lagos", "Port harcourt", "Ekiti", "Kaduna"];

// push allow us to add item to the end array

// MikeHousesLocation.push("Enugu");
// MikeHousesLocation.push("Anambra");

// Pop let us remove the last in an array
MikeHousesLocation.pop();

// console.log(MikeHousesLocation);

// console.log(MikeHousesLocation.length);

// OBJECT
// var car = {
//   color: "white",
//   brand: "BMW",
//   weight: "900kg",
//   seats: 4,
//   founder: ["Mike", "ben", "Kevin"],
//   brandAge: function StartCar(yearFounded) {
//     console.log(2024 - yearFounded);
//   },
// };

// car.brandAge(1980);

// LOOPS

var persons = ["mike", "Ben", "Kevin", "Josh", "Deborah"];

for (let i = 0; i < persons.length; i++) {
  console.log(persons[i]);
}

var a = 10;

let b = 5;

const c = 40;

console.log(a, b, c);

// DOM MANIPULATION
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");

var output = document.getElementById("output");

add.addEventListener("click", function () {
  // output.innerText = parseInt(output.innerText) + 1;
  output.innerHTML = "<h1>Hello there</h1>";
});

subtract.addEventListener("click", function () {
  output.innerText = parseInt(output.innerText) - 1;
});

// Give me the older and newer version of creating objects in JavaScript
// Give me the older and newer version of creating Arrays in JavaScript
// Create a simple calculator with division and multiplication that multiplies value by 5 and divide values by 2
