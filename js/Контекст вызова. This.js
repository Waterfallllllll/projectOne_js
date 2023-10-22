"use strict";

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
    console.log(this); // Получаем саму кнопку(<button></button>). Контекстом вызова будет сам элемент на котором произошло событие. По сути это как event, но он реже используется чем event. Работает также, но лучше не использовать.
});