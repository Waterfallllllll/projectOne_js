"use strict";

console.log(document.body); // Обращаемся к тегу body
console.log(document.head); // Обращаемся к тегу head
console.log(document.documentElement); // Обращаемся к тегу html. Таким образом получаем htmlku со всем содержимым который в нём есть


console.log(document.body.childNodes); // Узлы которые являются детьми у body

// Разница между dom элементами и dom узлами. Каждая сущность которая находится на странице она по факту будет узлом, но не каждый узел будет элементом. Всё что мы видим в тегах, это элементы. Всё что мы возможно и не видим, это будет узлом. Это переносы строк, это какие-то текстовые элементы. <li>1</li> - это дом элемент, но внутри него также есть текстовый дом узел - это 1.

console.log(document.body.firstChild); // Первый ребёнок внутри родителя body
console.log(document.body.lastChild); // Последний ребёнок внутри родителя body


console.log(document.querySelector("#current").parentNode); // Получаем родителя элемента
console.log(document.querySelector("#current").parentNode.parentNode); // Получаем родителя родителя


console.log(document.querySelector("[data-current='3']")); // Получаем data аттрибут со страницы. Если на странице просто дата аттрибудт без значения, до по дефолту он равняется true.
console.log(document.querySelector("[data-current='3']").nextSibling); // Получаем следующий элемент
console.log(document.querySelector("[data-current='3']").previousSibling); // Получаем предыдущий элемент

// Благодаря командам выше, мы получаем узлы. То есть мы можем получать вообще любой элемент. Перенос строки и так далее. Но есть аналоги этим командам которые дают нам четко элементы без переноса и так далее.

console.log(document.querySelector("[data-current='3']").nextElementSibling); // Получаем следующий элемент
console.log(document.querySelector("[data-current='3']").previousElementSibling); // Получаем предыдущий элемент


console.log(document.querySelector("#current").parentElement); // Получаем родителя элемента


console.log(document.body.firstElementChild); // Первый ребёнок внутри родителя body
console.log(document.body.lastElementChild); // Последний ребёнок внутри родителя body


// Аналог childnodes

for (let node of document.body.childNodes) {
    if (node.nodeName == "#text") {
        continue; // Этот оператор позволит остановить цикл и начать его заново с каким-то новым элементом. Тогда как оператор break полностью остановить цикл.
    }


    console.log(node);
}

