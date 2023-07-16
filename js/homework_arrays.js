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