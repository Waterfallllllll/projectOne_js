"use strict";

const arr = [2, 3, 4, 5, 6];

arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}


arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});




arr.pop();
arr.push(10);

console.log(arr);
console.log(arr.length);

/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); 
}
 */

for (let value of arr) {
    console.log(value);
}

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join("; "));