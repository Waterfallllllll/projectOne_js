/* eslint-disable no-empty */
"use strict";

function sayHello(a) {
	console.log(`Hello, ${a}`);
	return `Hello, ${a}`;
	
}

sayHello("Anton");

function returnNeighboringNumbers(a) {
	const b = [a - 1, a, a + 1];
	console.log(b);
	return b;
    
}

returnNeighboringNumbers(5);

function getMathResult(a, b) {
	let sum = 0;
	
	if (typeof (b) === "string") {
		return a;
	} else if (b <= 0) {
		return a;
	} else {
	let sentence = "";
		for (let i = 1; i <= b; i++) {
			
			if (i == b) {
				sum += a;
				sentence += `${sum}`;
			} else {
				sum += a;
				sentence += `${sum}---`;
			}
		}
	console.log(sentence);
	return sentence;
	}
}

getMathResult(10, 10);

