"use strict";
// Замена элементов в строке
// function maskify(cc) {
//     console.log(cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4));
// }

// maskify("Nananananananananananananananana Batman!");

// function findOdd(A) {
//     let arr = [...A];
//     let count = 0;
//     for (let i = 0; i < A.length; i++) {
//         for (let j = 0; j < A.length; j++) {
//             if (arr[i] == A[j]) {
//                 count++;
//             }
//         }
//         if (count % 2 != 0) {
//             return arr[i];
//         }
//         count = 0;
//     }
// }

// Число которое встречается нечетное число раз
// function findOdd(A) {
//     const num = A.reduce((a, b) => {
//         return a ^ b;
//     });
//     console.log(num);
// }

// findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);

// function accum(s) {
//     let finalSentence = "";
//     let sentence = s.toLowerCase().split("").map((item, i) => {
//         return item.repeat(i + 1);
//     }).join("-").split("");
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i-1] == "-") {
//             finalSentence += sentence[i].toUpperCase();
//         } else if (i == 0) {
//             finalSentence += sentence[i].toUpperCase();
//         } else {
//             finalSentence += sentence[i];
//         }
//     }
//     console.log(finalSentence);
// }

// function accum(s) {
//     let sentence;

//     sentence = s.split("").map((c, i) => {
//         let a;
//         let b;
//         a = c.toLowerCase().repeat(i);
//         b = c.toUpperCase();
//         return  b + a;
//     }).join("-");
//     return sentence;
// }

// console.log(accum("abcd"));    // "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt"));    // "C-Ww-Aaa-Tttt"

// const decodeMorse = function(morseCode){
//     const ref = {
//         ".-":     "a",
//         "-...":   "b",
//         "-.-.":   "c",
//         "-..":    "d",
//         ".":      "e",
//         "..-.":   "f",
//         "--.":    "g",
//         "....":   "h",
//         "..":     "i",
//         ".---":   "j",
//         "-.-":    "k",
//         ".-..":   "l",
//         "--":     "m",
//         "-.":     "n",
//         "---":    "o",
//         ".--.":   "p",
//         "--.-":   "q",
//         ".-.":    "r",
//         "...":    "s",
//         "-":      "t",
//         "..-":    "u",
//         "...-":   "v",
//         ".--":    "w",
//         "-..-":   "x",
//         "-.--":   "y",
//         "--..":   "z",
//         ".----":  "1",
//         "..---":  "2",
//         "...--":  "3",
//         "....-":  "4",
//         ".....":  "5",
//         "-....":  "6",
//         "--...":  "7",
//         "---..":  "8",
//         "----.":  "9",
//         "-----": "0",
//         "...---...": "sos",
//         "-.-.--": "!"
//     };
//     const sen = morseCode.trim();
//     const sentence = sen.split(" ");
//     let finalSentence = "";
//     let count = 0;

//     for (let i = 0; i < sentence.length; i++) {
//         if (count > 0) {
//             count = 0;
//             continue;
//         } else {
//             for (let key in ref) {
//                 if (sentence[i] == "") {
//                     count++;
//                     finalSentence += " ";
//                     break;
//                 } else {
//                     if (sentence[i] == key) {
//                         finalSentence += ref[key];
//                     }
//                 }
//             }
//         }
//     }
//     let final = finalSentence.toUpperCase();
//     console.log(final);
//     return final;
// };


// decodeMorse("      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  ");

// function arrayDiff(a, b) {

//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < b.length; j++) {
//             if (a[i] == b[j]) {
//                 a.splice(i, 1);
//                 i--;
//             }
//         }
//     }

//     return a;
// }

// arrayDiff([1, 2, 2, 2, 3], [2,1]);
// arrayDiff([1, 2], [1]);


// function zero(func)   { return func ? func(0) : 0; }
// function one(func)    { return func ? func(1) : 1; }
// function two(func)    { return func ? func(2) : 2; }
// function three(func)  { return func ? func(3) : 3; }
// function four(func)   { return func ? func(4) : 4; }
// function five(func)   { return func ? func(5) : 5; }
// function six(func)    { return func ? func(6) : 6; }
// function seven(func)  { return func ? func(7) : 7; }
// function eight(func)  { return func ? func(8) : 8; }
// function nine(func)   { return func ? func(9) : 9; }

// function plus( b )      { return function( a ) { return a + b; }; }
// function minus( b )     { return function( a ) { return a - b; }; }
// function times(b) {
//     return function (a)
//     {
//         return a * b;
//     };
// }
// function dividedBy(b) {
//     return function (a)
//     {
//         return Math.floor(a / b);
//     };
// }

// console.log(seven(dividedBy(five())));

// function isPangram(string){
//     let str=string.split(" ").join("").replace(/[\W\d]/g,"").toLowerCase().split("");
//     return [...new Set(str)].length==26;
// }

// isPangram("The quick brown fox jumps over the lazy dog");

// function findOutlier(integers) {
//     if ((integers[0] % 2 == 0 && integers[2] % 2 == 0) || (integers[1] % 2 == 0 && integers[2] % 2 == 0) || (integers[0] % 2 == 0 && integers[1] % 2 == 0)) {
//         let arr = integers.filter(item => {
//             return item % 2 != 0;
//         });
//         return +arr.join("");
//     } else if ((integers[0] % 2 != 0 && integers[2] % 2 != 0) || (integers[1] % 2 != 0 && integers[2] % 2 != 0) || (integers[0] % 2 != 0 && integers[1] % 2 != 0)) {
//         let arr = integers.filter(item => {
//             return item % 2 == 0;
//         });
//         return +arr.join("");
//     }
// }

// findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]); //11 (the only odd number)
// findOutlier([160, 3, 1719, 19, 11, 13, -21]); //160 (the only even number)

// function cakes(recipe, available) {
//     const arr = [];
//     const firstArr = [];
//     const secondArr = [];

//     for (let key in recipe) {
//         firstArr.push(key);
//     }
//     for (let key in available) {
//         secondArr.push(key);
//     }

//     if (firstArr.length > secondArr.length) {
//         console.log(0);
//         return 0;
//     } else {
//         for (let key in available) {
//             for (let keyy in recipe) {
//                 if (keyy == key) {
//                     arr.push(Math.floor(available[key] / recipe[key]));
//                 }
//             }
//         }
//     }

//     console.log(Math.min(...arr));
//     return Math.min(...arr);
// }

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

// function cakes(recipe, available) {
//     return Object.keys(recipe).reduce(function(val, ingredient) {
//         return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val);
//     }, Infinity);
// }

// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});


// assign your RegExp to REGEXP:
// const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-z0-9]{6,}$/i;

// console.log(REGEXP.test("DSJKHD23"));

// Когда мы используем .* внутри lookahead-структуры, такой как (?=.*\d), .* помогает "пропустить" любое количество символов перед символом, который мы хотим найти (в данном случае — цифру \d). Это не означает, что мы разрешаем любые символы во всём пароле; вместо этого мы говорим: "где-то в пароле должна быть хотя бы одна цифра".

class PaginationHelper {
    constructor(collection, itemsPerPage) {
        // The constructor takes in an array of items and a integer indicating how many
        // items fit within a single page
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }
    itemCount() {
        // returns the number of items within the entire collection
        return this.collection.length;
    }
    pageCount() {
        // returns the number of pages
        return Math.round(this.collection.length / this.itemsPerPage);
    }
    pageItemCount(pageIndex) {
        // returns the number of items on the current page. page_index is zero based.
        // this method should return -1 for pageIndex values that are out of range
        let arr = [];
        
    }
    pageIndex(itemIndex) {
        // determines what page an item is on. Zero based indexes
        // this method should return -1 for itemIndex values that are out of range
        
    }
}

var helper = new PaginationHelper(["a","b","c","d","e","f"], 4);
helper.pageCount(); // should == 2
helper.itemCount(); // should == 6
helper.pageItemCount(0); // should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); // should == 1 (zero based index)
helper.pageIndex(2); // should == 0
helper.pageIndex(20); // should == -1
helper.pageIndex(-10); // should == -1