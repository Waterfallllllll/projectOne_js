/* eslint-disable no-constant-condition */
'Use strict';

/* if (1) {
	console.log('Ok!');
} else {
	console.log ('Error');
}

const num = 50;

if (num < 49) {
	console.log('Error');
} else if (num > 100) {
	console.log('Too much');
} else {
	console.log('Ok!');
}


const numOne = 50;

(numOne === 50) ? console.log('Ok!')	: console.log('Error'); 
// Если условие верно, то выполняем первое действие. Если нет, то выполняем второе. Это тернарный оператор. */

const num = 50;
switch (num) {
case 49: 
	console.log('Error');
	break;
case 100:
	console.log('Error');
	break;
case 51:
	console.log('Succeed');
	break;
default:
	console.log('Not this time');
	break;	
		
}