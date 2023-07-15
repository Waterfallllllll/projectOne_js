"use strict";

function fisrt() {
    // Do something
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

fisrt();
second();

function learnJs(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

/* learnJs("JavaScript", function () {
    console.log("Я прошел этот урок"); //Анонимная функция. После передачи она исчезнет.
}); */

function done() {
    console.log("Я прошел этот урок");
}

learnJs("JavaScript", done);