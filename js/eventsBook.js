"use strict";

window.onload = init;

function init() {
    const images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].onmouseover = showAnswer;
        images[i].onmouseout = reblur;
    }
}

function showAnswer(e) {
    let image = e.target;
    let name = image.id;
    name = "img/" + name + ".jpg";
    image.src = name;

    // setTimeout(reblur, 2000, image);
}

function reblur(e) {
    let image = e.target;
    let name = image.id;

    name = "img/" + name + "blur.jpg";
    image.src = name;
}

// window.onload = init;

// function init() {
//     let map = document.getElementById("map");
//     map.onmousemove = showCoords;
// }

// function showCoords(e) {
//     let map = document.getElementById("map");
//     let x = e.clientX;
//     let y = e.clientY;
//     let coords = document.getElementById("coords");
//     coords.innerHTML = `Coordinates: ${x}, ${y}`;
// }