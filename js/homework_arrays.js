"use strict";

const family = ["Peter", "Ann", "Alex", "Linda"];


function showFamily(arr) {
    let sentence = "";

    if (arr.length === 0) {
        return "Семья пуста";
    } else {
        arr.forEach(function (item) {
            sentence += `${item} `;
        
        });
        return `Семья состоит из: ${sentence}`;
    }
}   

showFamily(family);


const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
    arr.forEach(function (item) {
        return item.toLowerCase();
    });
}

standardizeStrings(favoriteCities);


const someString = "This is some strange string";

function reversed(str) {
    
    // let strin = "";
    // for (let i = str.length - 1; i >= 0; i--) {
    //     strin += str[i];
    // }
    // console.log(strin);

    const products = str.split("").reverse().join("");
    console.log(products);
}

reversed(someString);


// const baseCurrencies = ["USD", "EUR"];
// const additionalCurrencies = ["UAH", "RUB", "CNY", "ASD", "FFF", "FFG"];

// function availableCurr(arr, missingCurr) {
//     if (arr == 0) {
//         console.log("Нет доступных валют");
//     } else {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] === missingCurr && i != arr.length - 1) {
//                 delete arr[i];   
//                 if (i >= 2) {
//                     for (let h = 0; h < arr.length - 1 - h; h++) {
//                         arr[i+h] = arr[i+1+h];
//                     }
//                 } else {
//                     for (let j = 0; j < arr.length - 1; j++) {
//                         arr[i+j] = arr[i+1+j];
//                     }
//                 }
//                 arr.pop();
//             } else if (i == arr.length - 1 && arr.length == 5) {
//                 arr.pop();
//             }
//         }
//         const products = arr.join("\n");
//         console.log(`Доступные валюты:\n${products}`);
//     }
// }

// availableCurr([...baseCurrencies, ...additionalCurrencies], "FFG");


const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY", "ASD", "FFF", "FFG"];

function availableCurr(arr, missingCurr) {
    let str = "";
    arr.length === 0 ? str = "Нет доступных валют" : str = "Доступные валюты:\n";

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], "RUB");