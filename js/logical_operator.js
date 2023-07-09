'use strict';

/* const hamburger = 5;
const fries = 5;

if (hamburger && fries) {
	console.log ('Я сыт');
} */

/* 
console.log(hamburger === 3 && fries && cola === 1);

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'asdfasdfdsaf');



const hamburger = 3;
const fries = 1;
const cola = 0;



if (hamburger === 3 && fries && cola === 1) {
	console.log ('Я сыт');
} else {
	console.log ('Все плохо');
} */

const hamburger = 3;
const fries = 0;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && (cola === 2 || fries === 3) && nuggets) {
	console.log ('Я сыт');
} else {
	console.log ('Все плохо');
}

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

console.log(!0);