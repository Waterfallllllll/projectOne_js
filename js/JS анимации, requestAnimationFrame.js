"use strict";

const btn = document.querySelector(".btn"),
    elem = document.querySelector(".box");  
let pos = 0;

// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//         }
//     }
// }

// function myAnimation() {

//     pos++;
//     elem.style.top = pos + "px";
//     elem.style.left = pos + "px";

//     if (pos < 300) {
//         requestAnimationFrame(myAnimation);
//     }

// }

// btn.addEventListener("click", () => requestAnimationFrame(myAnimation));


// // Для остановки анимации
// let id = requestAnimationFrame(myAnimation);
// cancelAnimationFrame(id);

var start = null;
var element = document.querySelector(".box");

function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    element.style.transform =
    "translateX(" + Math.min(progress / 7, 300) + "px)";
    if (progress < 3000) {
        window.requestAnimationFrame(step);
    }
}

window.requestAnimationFrame(step);