"use strict";

// To string

//1 - Значение null становится string. 
console.log(typeof (String(null)));
console.log(typeof (String(4)));

//2 - Конкатенация

console.log(typeof (5 + ""));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + "px";

// To number

//1
console.log(typeof (Number("4")));

//2
console.log(typeof (+"5"));

//3
console.log(typeof (parseInt("15px", 10)));
// 10 после запятой - это десятичная система.

let answ = +prompt("Hello", "");
// Когда хотим значение из промпта сделать числовым типом, а не строкой.

//Все что мы получаем от пользователя, всегда будет типом данных строка. Значение из промпта, данные из тегов импут и прочее. Все это строки.

// To boolean

// 0, "", null, undefined, NaN; - Всегда false. Все остальное, что существует в js - будет true. Это пустые массивы, пустые объекты, строки и так далее.

//1
let switcher = null;

if (switcher) {
    console.log("Working...");
}

switcher = 1;

if (switcher) {
    console.log("Working...");
}

//2
console.log(typeof (Boolean("4")));

//3
console.log(typeof (!!"4"));
