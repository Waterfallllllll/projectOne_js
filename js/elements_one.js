"use strict";

const box = document.getElementById("box"),
    btns = document.getElementsByTagName("button"),
    circles = document.getElementsByClassName("circle"),
    wrapper = document.querySelector(".wrapper"),
    hearts = wrapper.querySelectorAll(".heart"), // В переменную пойдут - элемент heart который есть в элементе wrapper
    oneHeart = wrapper.querySelector(".heart");
    
// Стилизуем при помощи inline стилей. А inline стили имеют самый высокий приоритет.
// box.style.backgroundColor = "blue";
// box.style.width = "500px";

box.style.cssText = "background-color: yellow; width: 500px";
// box.style.cssText = `background-color: yellow; width: ${num}px`;

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";
// console.dir(); Для того, чтобы посмотреть какие есть свойства.

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = "blue";
// }

hearts.forEach(item => {
    item.style.backgroundColor = "violet";
});

const div = document.createElement("div"); // Создали определенный тег. Он существует только внутри джсного файла. 
const text = document.createTextNode("Я был тут"); // Создали текст.

div.classList.add("black");

// document.body.append(div); Берём тег body как родителя и во внутрь его, как в самый конец добавляем наш div.
// document.querySelector(".wrapper").append(div);
// wrapper.append(div);
// wrapper.appendChild(div); Устаревший метод.
// wrapper.prepend(div); Ставит элементы вперёд.

// hearts[0].before(div); // Вставляем перед
hearts[0].after(div); // Вставляем после

wrapper.insertBefore(div, hearts[0]); // Тоже устарел. Говорим в какой родитель вставляем, затем говорим какой именно элемент вставляем. Затем говорим перед каким элементом вставляем.

circles[0].remove(); // Удаляем определенный элемент
wrapper.removeChild(hearts[1]); //Устаревшая

hearts[0].replaceWith(circles[0]); //Указываем какой именно элемент хотим заменить, на какой именно другой элемент.
wrapper.replaceChild(circles[0], hearts[0]); // Устаревшая

div.innerHTML = "Hello World"; // Если во внутрь нашего блока хотим вставить текст.
div.innerHTML = "<h1>Hello World</h1>"; // Можем вставлять html теги.
//Аналог
div.textContent = "Hello"; // Он работает только с текстом и html структура сюда больше не подойдёт.

div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>"); // Позволяет подставить данные html непосредственно перед элементом.
div.insertAdjacentHTML("afterbegin", "<h2>Hello</h2>"); // В начало элемента как с prepend
div.insertAdjacentHTML("beforeend", "<h2>Hello</h2>"); // В конец
div.insertAdjacentHTML("afterend", "<h2>Hello</h2>"); // после элемента
