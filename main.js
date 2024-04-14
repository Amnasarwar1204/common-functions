"use strict";
//                               <<<<<<<<<<<<<<<<<<<<<<<<<BASIC FUNCTION>>>>>>>>>>>>>>>>>>>>>>>>>
// 1.
function name1() {
    console.log("I am a function named basic function");
}
name1();
//  2.
function functionName() {
    return "amna";
}
let name2 = functionName();
console.log(name2);
// 3.
function adding() {
    return 3 + 3 - 1;
}
console.log(adding());
let name3 = adding();
console.log(name3);
//                                 <<<<<<<<<<<<<<<<<<<<<<<<<< HOME WORK >>>>>>>>>>>>>>>>>>>
// Create a function named calculaterProduct that take two parameters, multiplies them together, and returns the result.
function calculaterProduct(a, b) {
    return a * b;
}
let result = calculaterProduct(5, 10);
console.log(result);
//                               <<<<<<<<<<<<<<<<<<<<<<<Parameters and Arguments>>>>>>>>>>>>>>>>>>>>
// 1.
function sum(val1, val2, val3) {
    console.log(val1 + " " + "you get" + " " + val2 + val3);
}
sum("amna", 5, 8); //here amna,5,8 are arguments
//                      <<<<<<<<<<<<<<<<<<<<<<<<<<< DAFULT FUNCTION >>>>>>>>>>>>>>>>>>>>>>>>>
// write value in parameters
// 1.
function intro(a = "Hello", b = "Sir Hamza") {
    return a + " " + b;
}
console.log(intro());
// 2.
function sum2(x, y = 15) {
    return x / y;
}
console.log(sum2(3));
//                           <<<<<<<<<<<<<<<<<<<<<<<<<< HOME WORK >>>>>>>>>>>>>>>>>>>>>>>>
// Define a function greet that take two parameters: name and greeting,where greating has a default value of "Hello".
//  The function should return a greeting message.
function greet(name, greeting = "Hello") {
    return greeting + " " + name;
}
console.log(greet("Ameen"));
console.log(greet("Hi", "Zia"));
// <<<<<<<<<<<<<<<<<<<Arrow function>>>>>>>>>>>>>>>>>>>
// An arrow function is a concise way to write anonymous functions in typescript using the => (arrow) syntax
//                                              syntx
// let functionName=() :string=>{
//     let greet:string= "Hello World";
//     return greet;
// }
// console.log(functionName());
// 1.
let x = (a, b) => {
    console.log(a + " " + b);
};
x("Hey", "amna");
//                           <<<<<<<<<<<<<<<<<<<<<<<<<< HOME WORK >>>>>>>>>>>>>>>>>>>>>>>>
// Convert the following traditional function into arrow function
// function add(a:number , b:number){return a+b}
let add2 = (a, b = 5) => {
    return a + b;
};
console.log(add2(3));
//                              <<<<<<<<<<<<<<<<<<<<<< REST PARAMETERS >>>>>>>>>>>>>>>>>>>>>>>>
// Rest parameters in TypeScript allow capturing an indefinite number of function arguments as an array.
//1. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician
//  in the array
// Q: 41
let magicianNames = ["Harry Houdini", "David Copperfield", "Penn & Teller ", "David Blaine", "Criss Angel", " Dynamo"];
function show_magicians(...magicianNames) {
    console.log(magicianNames);
}
show_magicians("Harry Houdini", "David Copperfield", "Penn & Teller ", "David Blaine", "Criss Angel", " Dynamo");
//2. Q: 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
// that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() 
// to see that the list has actually been modified
function show_magicians1(...magicianNames) {
    for (let i = 0; i < magicianNames.length; i++) {
        magicianNames[i] = "The Great " + magicianNames[i];
    }
    console.log(magicianNames);
}
show_magicians1("Harry Houdini", "David Copperfield", "Penn & Teller ", "David Blaine", "Criss Angel", " Dynamo");
//3. Q: 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
//  Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each 
//  array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians2(...magicianNames) {
    console.log(magicianNames);
}
console.log("This is my old arry");
show_magicians2("Harry Houdini", "David Copperfield", "Penn & Teller ", "David Blaine", "Criss Angel", " Dynamo");
function show_magicians3(...magicianNames1) {
    for (let i = 0; i < magicianNames1.length; i++) {
        magicianNames1[i] = "The Great " + magicianNames1[i];
    }
    console.log(magicianNames1);
}
console.log("This is my new arry");
show_magicians3("Harry Houdini", "David Copperfield", "Penn & Teller ", "David Blaine", "Criss Angel", " Dynamo");
//4. Q: 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the 
//  sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function recipe(...sandwich) {
    console.log('\nMaking your sandwich with:');
    sandwich.forEach(element => console.log("- " + element));
    console.log('Enjoy your sandwich.\n');
}
console.log("Making your sandwish with:");
recipe('Chicken', 'Cheese', 'Mayo');
console.log("Here is your sandwish");
//5. Create an array of your three favorite fruits and add a new fruit to the end of the array.
let fruit = ["mango", "orange", "melon"];
fruit.push("graps"); //add in arry
console.log(fruit);
fruit.pop(); //remove last  item from arry
fruit.shift(); //remove first item from arry
console.log(fruit);
let numArr = fruit.map((fruit) => fruit.length);
console.log(numArr);
//6. Q: 94
let words = ["Hello", "World", "TypeScript", "JavaScript"];
let lengthe = words.map((words) => words.length);
console.log(lengthe);
//7. Q: 95
let num = [40, 60, 10, 100];
function newnum(...num) {
    return num.filter((num) => num > 10);
}
console.log(newnum(1, 2, 3, 4, 5, 10, 60));
//8. Q: 96
let num3 = [40, 60, 10, 100];
function newnum3(...num3) {
    return num3.reduce((a, b) => a + b, 0);
}
console.log(newnum3(1, 2, 3, 4, 5, 10, 60));
// 9.
let wordS = ["Hello", " ", " , ", "World", " ", " , ", "TypeScript", " ", ",", "JavaScript"];
function k(words) {
    return words.reduce((a, b) => a + b);
}
console.log(k(wordS));
//                             <<<<<<<<<<<<<<<<<<<<<<<< HOME WORK >>>>>>>>>>>>>>>>>>>>>>
// Write a function sumAll that uses a rest parameter to take any number of arguments and return their sum.
function sumAll(...z) {
    return z.reduce((a, b) => a + b);
}
console.log(sumAll(10, 20, 30, 40, 50));
//                           <<<<<<<<<<<<<<<<<<<<<<<<<< RETURNING FUNCTION >>>>>>>>>>>>>>>>>>>>>
// A returning function in TypeScript is a function that returns a value.
function createExponentiation(base) {
    return function (power) {
        return base * power;
    };
}
console.log(createExponentiation(2)(3));
//                    <<<<<<<<<<<<<<<<<<<<<< HOMEWORK >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Create a function multiplier that takes a number as its argument and return another function. The return function should take a single 
// number as its argument and return the product of its argument ant the argument of first function.
function multiplier(x) {
    return function (y) {
        return x * y;
    };
}
console.log(multiplier(3)(5));
//                       <<<<<<<<<<<<<<<<<<<<<<<<RECURSIVE FUNCTIONS>>>>>>>>>>>>>>>>>>>>>>>>>>>
// It is a function that call itself with its body.
// 1.
function contdown(number) {
    if (number <= 0) {
        console.log("DONE!");
        return;
    }
    console.log(number);
    contdown(number - 1);
}
contdown(5);
// 2.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
let respond = factorial(5);
console.log(respond);
// 3.Write a recursive function to calculate the sum of all elements in an array of numbers.
function calculateSum(n) {
    if (n.length === 0) {
        return 0;
    }
    return n[0] + calculateSum(n.slice(1));
}
let sum4 = calculateSum([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(sum4);
//                                <<<<<<<<<<<<<<<<<<<<<<<< HOME WORK >>>>>>>>>>>>>>>>>>>>>>>>
// Write a recursive function to calculate  the factorial of a number.The factorial of a number n is the product of all positive integers
// less the or equal to n.
function factorial2(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * factorial2(n - 1);
    }
}
console.log(factorial2(5)); // Outputs: 120 (5! = 5*4*3*2*1 = 120)
// 
//                             <<<<<<<<<<<<<<<<<<<<<<<<<<<NEST FUNCTION>>>>>>>>>>>>>>>>>>>>>>>>>>
// Nest function is a function inside another function.
// 1.
function outerFunction() {
    let outerVariable = "I am outer function";
    function inneerFunction() {
        let innerVariable = "I am inner function";
        console.log(`Inner:  ${innerVariable}`);
        console.log(`Outer:  ${outerVariable}`);
    }
    inneerFunction();
}
outerFunction();
// // 2.
function oouterFunction() {
    function iinerFunction() {
        console.log("hey");
    }
    iinerFunction();
}
oouterFunction();
//                            <<<<<<<<<<<<<<<<<<<<<<<<<< HOME WORK >>>>>>>>>>>>>>>>>>>>>>>
// Write a function that contain two nest functions.The outer function should accept parameter x,and its nest function should increment
//  and then triple x. The outer function should return the result of the tripled value after incrementing.
function outerFunction1(x) {
    function inneerFunction() {
        x++;
        return (x * 3);
    }
    return inneerFunction();
}
console.log(outerFunction1(4));
//                     <<<<<<<<<<<<<<<<<<<<<<<<< CALLBACK FUNCTION>>>>>>>>>>>>>>>>>>>>>>>
// Function ky argument ky under function pass karna
//1.
function processUserInput(callback) {
    let name = "Amna Sarwar";
    callback(name);
}
processUserInput(function (name) {
    console.log("hello, " + name);
});
//                        <<<<<<<<<<<<<<<<<<<<<<<< HOME WORK >>>>>>>>>>>>>>>>>>>>>>>>>>>
// Create an anonymous function that take an arry of number and a callback function. The anonymous function should apply the callback 
// function to each element of the arry and return a new arry with the result.
let anonymouFunction = function (x, callback) {
    let result = callback(x);
    console.log(result);
};
let doubleFunction = (arr) => {
    return arr.map(num => num * 2);
};
anonymouFunction([1, 2, 3], doubleFunction);
//                                 <<<<<<<<<<<<<<<<<<<<<<< TIMEOUT >>>>>>>>>>>>>>>>>>>>>
// Is a program that allow you to execute a function or a piece of code after specific delay
// 1.
console.log("Start"); // Executed first
setTimeout(() => {
    console.log("Inside setTimeout"); // Executed after 2 seconds
}, 2000);
console.log("End"); // Executed second (after "Start" and before "Inside setTimeout")
//                               <<<<<<<<<<<<<<<<<<<<<<<<< HOME WORK >>>>>>>>>>>>>>>>>>>>>>>
// Use a setTimeout within a function to simulate a delay in process.The function should accept a callback and invoke it after a 
// delay of 2 second
setTimeout(() => {
    console.log("Data retrieved");
}, 9000); //wait for 9000 milisecond(9 second and then run)                      
//                     <<<<<<<<<<<<<<<<<<<<<<<<<< OPTIONAL PARAMETERS >>>>>>>>>>>>>>>>>>>>>>>
// if u dont want to write any aragument
function bio(name, age) {
    return name + " " + age;
}
console.log(bio("amna"));
//                      <<<<<<<<<<<<<<<<<<<<<<<<<<<<  ANONYMOUS FUNCTION >>>>>>>>>>>>>>>>>>>>>>>>>
// A function without name and store in variable and call this variable.
let info = function (a, b) {
    return a + " " + b;
};
console.log(info("hello", "Tom"));
//                        <<<<<<<<<<<<<<<<<<<<<<<<< DATE >>>>>>>>>>>>>>>>>>>>>>
// It give u current date with month and year
function getCurrentDateFormatted() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0"); // Ensures the day is two digits
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Adds 1 because months are 0-indexed
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
}
console.log(getCurrentDateFormatted());
//                                  <<<<<<<<<<<<<<<<<<<< TIME >>>>>>>>>>>>>>>>>>>>
// It give u current time.
function showTime() {
    let currentTime = new Date();
    let time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    console.log(time);
}
showTime();
