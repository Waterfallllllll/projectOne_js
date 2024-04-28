"use strict";

function rot13(str) {
    const englishAlphabet = [];
    for (var i = 97; i <= 122; i++) {
        englishAlphabet.push(String.fromCharCode(i));
    }
    console.log(englishAlphabet);
    const arr = [...str.toLowerCase()];
    const secondArr = [];
    let count = 0;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < englishAlphabet.length; j++) {
            if (typeof arr[i] == "string") {
                if (arr[i] == englishAlphabet[j]) {
                    if (englishAlphabet[j + 13] == undefined) {
                        count++;
                        secondArr.push(englishAlphabet[count - 1]);
                    } else {
                        secondArr.push(englishAlphabet[j + 13]);
                    }
                }
            }
        }
    }
    console.log(count);
    console.log(secondArr);
    // console.log(arr);
}

rot13("rknzcyr.");


