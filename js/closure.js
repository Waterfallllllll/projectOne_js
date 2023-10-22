"use strict";

function makeTimer(doneMessage, n) {
    setTimeout(function () {
        alert(doneMessage);
    }, n);
}

makeTimer("Cookies are done!", 1000);

// function handler() {
//     alert(doneMessage);
// }

// function makeTimer(doneMessage, n) {
//     setTimeout(handler, n);
// }

// makeTimer("Cookies are done!", 1000);