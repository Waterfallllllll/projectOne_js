"use strict";

function addSongs() {
    let song1 = document.getElementById("song1");
    let song2 = document.getElementById("song2");
    let song3 = document.getElementById("song3");

    song1.innerHTML = "Bla bla";
    song2.innerHTML = "Bla bla bla";
    song3.innerHTML = "Bla bla bla bla";

    song2.setAttribute("class", "redtext");
}

window.onload = addSongs;


