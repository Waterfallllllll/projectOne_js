"use strict";

function rot13(str) {
    const englishAlphabetLowerCase = [];
    const englishAlphabetUpperCase = [];

    for (var i = 97; i <= 122; i++) {
        englishAlphabetLowerCase.push(String.fromCharCode(i));
    }
    
    for (var j = 65; j <= 90; j++) {
        englishAlphabetUpperCase.push(String.fromCharCode(j));
    }

    const arr = [...str];
    const secondArr = [];
    let sum = 0;
    let k = 0;


    [...str].forEach(item => {
        if (item == /\D/) {
            console.log(item);
        }
    });

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < englishAlphabetUpperCase.length; j++) {
            if (arr[i] == arr[i].toUpperCase()) {
                if (arr[i] == /\D/) {
                    secondArr.push(arr[i]);
                }
                if (arr[i] == englishAlphabetUpperCase[j]) {
                    if (englishAlphabetUpperCase[j + 13] == undefined) {
                        sum = j + 13;
                        secondArr.push(englishAlphabetUpperCase[sum - englishAlphabetUpperCase.length]);
                    }
                    else
                    {
                        secondArr.push(englishAlphabetUpperCase[j + 13]);
                    }
                } 
            } else {
                if (k == arr.length) {
                    break;
                }
                for (k = i; k < arr.length; k++) {
                    for (let j = 0; j < englishAlphabetLowerCase.length; j++) {
                        if (arr[k] == englishAlphabetLowerCase[j]) {
                            if (englishAlphabetLowerCase[j + 13] == undefined) {
                                sum = j + 13;
                                secondArr.push(englishAlphabetLowerCase[sum - englishAlphabetLowerCase.length]);
                            } else {
                                secondArr.push(englishAlphabetLowerCase[j + 13]);
                            }
                        } 
                    }
                }
            }
        }
    }
    
    console.log(secondArr);
}

rot13("EBG13 rknzcyr.");


