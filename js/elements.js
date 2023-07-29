/* eslint-disable linebreak-style */
"use strict";

const box = document.getElementById("box"); // Вместилеще информации. Взять элемент по id

console.log(box);

const btns = document.getElementsByTagName("button")[1]; // Мы получили псевдомассив элементов по определенному тегу. В прототипном массиве не работают такие методы как push и так далее. Мы всегда получаем псевдомассив вне зависимости от того, сколько у нас тегов. Для того, чтобы поменять стиль у определенного элемента, даже если он 1, то мы должны обратиться к нему через определенный индекс, так как у нас массив. Что-то типа такого должно быть console.log(btns[1]).
// const btns = document.getElementsByTagName("button");
// console.log(btns[1]);
console.log(btns);

const circles = document.getElementsByClassName("circle");
console.log(circles); // Работает также как и с тегами.

const hearts = document.querySelectorAll(".heart"); // Тут мы можем использовать селекторы. И этот метод может работать с псевдомассивом.

hearts.forEach(item => {
// callback функция.
    console.log(item);
});

const oneHeart = document.querySelector(".heart"); // Получаем только первый элемент. Можем взять также и теги. Просто без точки div к примеру.
console.log(oneHeart);