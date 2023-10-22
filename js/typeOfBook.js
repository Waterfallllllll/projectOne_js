"use strict";

let x;

if (x == undefined) {
    console.log("bla");
}

let test1 = "abc";
let test2 = 123;
let test3 = true;
let test4 = {};
let test5 = [];
let test6;
let test7 = { "abcdef": 123 };
let test8 = ["abcdef", 123];
function test9() { return "abcdef" };

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);


let test10 = null;

console.log(typeof test10);

let myNum = 0 / 0;

if (isNaN(myNum)) {
    myNum = 0;
    console.log(myNum);
}

if (99 == "99") {
    console.log("A number equals a string!");
} else {
    console.log("No way a number equals a string");
}


