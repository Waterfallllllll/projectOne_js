"use strict";

function fib(number) {

    if (typeof(number) !== "number" || number <= 0 || !Number.isInteger(number)) {
        return "";
    }

    let sum = [0, 1];
    let an_sum = 0;
    let sentence = "";
    for (let i = 0; i < number - 2; i++) {
        an_sum = sum[i] + sum[i + 1];
        sum[i + 2] = an_sum;
       
    }
    for (let j = 1; j <= number; j++) {
        if (j == number) {
            sentence += `${sum[j-1]}`;
        } else {
            sentence += `${sum[j-1]} `;
        }
        
    }
    console.log(sentence);
}   

fib(7);