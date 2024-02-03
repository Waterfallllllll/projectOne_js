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

function arrayDiff(a, b) {

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                a.splice(i, 1);
                i--;
            }
        }
    }

    return a;
}

arrayDiff([1, 2, 2, 2, 3], [2,1]);
arrayDiff([1, 2], [1]);