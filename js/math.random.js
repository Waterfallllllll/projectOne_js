"use strict";

// function makePhrases() {
//     let wordsOne = ["asdf", "gggg", "gfdgg", "asdgdsgds", "sdgsdgdsgdsgdsg"];
//     let wordsTwo = ["fffffff", "ffg", "asdfffff", "qwer", "asgdgg"];
//     let wordsThree = ["afswqrqwrwqr", "dfasbbcbcxb", "adbffd", "asgfdfdbdfbfd", "assdgdsgdsgds"];

//     let randOne = Math.floor(Math.random() * wordsOne.length);
//     let randTwo = Math.floor(Math.random() * wordsTwo.length);
//     let randThree = Math.floor(Math.random() * wordsThree.length);

//     let phrase = `${wordsOne[randOne]}, ${wordsTwo[randTwo]}, ${wordsThree[randThree]}`;
//     alert(phrase);
// }

// makePhrases();


// function data(arr) {
//     let max = 0;
//     let arrOne = [];
//     for (let i = 0; i < arr.length; i++) {
//         console.log(`Bubble solution #${i} score: ${arr[i]}`);
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == max) {
//             arrOne.push(i);
//         }
//     }

//     console.log(`Bubble tests: ${arr.length}`);
//     console.log(`Highest bubble score: ${max}`);
//     console.log(`Solutions with highest score: ${arrOne}`);
// }

// data([60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44]);

// function hasBubbleGum(arr, BubbleGum) {
//     let i = 0;
//     for (let i = 0; i < BubbleGum.length; i++) {
//         if (BubbleGum[i]) {
//             console.log(`${arr[i]} contains bubble gum`);
//         }
//     }
// }

// hasBubbleGum(["Choo choo", "Icy", "Cake", "Bubblegum"], [false, false, false, true]);

// let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

// function printAndGetHighScore(arr) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         console.log(`Bubble solution #${i} score: ${arr[i]}`);
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// let max = printAndGetHighScore(scores);
// console.log(`Bubble tests: ${scores.length}`);
// console.log(`Highest bubble score: ${max}`);

// // function getBestResults(arr, max) {
// //     let arrOne = [];
// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] == max) {
// //             arrOne += `${i}, `;
// //         }
// //     }

// //     console.log(`Solutions with highest score: ${arrOne.slice(0, arrOne.length - 2)}`);
// //     return arrOne.slice(0, arrOne.length - 2);
// // }

// // let result = getBestResults(scores, max);

// function getBestResults(arr, max) {
//     let arrOne = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == max) {
//             arrOne.push(i);
//         }
//     }

//     console.log(`Solutions with highest score: ${arrOne}`);
//     return arrOne;
// }

// let result = getBestResults(scores, max);

const costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22, .20, .25, .30, .25, .24, .25, .25, .25, .27, .25, .26, .29];

let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

function printAndGetHighScore(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(`Bubble solution #${i} score: ${arr[i]}`);
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let max = printAndGetHighScore(scores);

function MostEffectiveResult(max, costs, arr) {
    let cost = 100;
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == max) {
            if (cost > costs[i]) {
                index = i;
                cost = costs[i];
            }
        }
    }
    console.log(`Bubble solution #${index} is the most cost effective`);
}

MostEffectiveResult(max, costs, scores);




let dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls"
};



if (dog.weight > 20) {
    dog.bark = "WOOF WOOF";
} else {
    dog.bark = "woof woof";
}

let speak = `${dog.name} says ${dog.bark} when he wats to ${dog.activity}`;
console.log(speak);


console.log(dog);




