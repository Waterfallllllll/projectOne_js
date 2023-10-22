"use strict";

//filter

//Фильтрует элементы внутри массива
//Возвращает новый массив
//Функция которая перебирает элементы и возвращает только те элементы, которые подходят под условия.

const names = ["Ivan", "Ann", "Ksenia", "Voldemart"];

// Получить все имена которые меньше чем 5 символов

const shortNames = names.filter((name) => { // name - каждый отдельный элемент внутри массива.
    return name.length < 5;
});

console.log(shortNames);

// map

// Позволяет взять исходный массив и изменить каждый элемент внутри него, на выходе получается новый массив с измененными данными.

let answers = ["IvAn", "AnnA", "Hello"];

// Нужно чтобы все имена были в нижнем регистре

const result = answers.map(item => {
    return item.toLowerCase();
});

console.log(result);

// every/some

//  some - Берёт массив перебирает его, и если у нас есть хотя бы 1 элемент который подходит по условию, то он вернёт true, если нет, то false
// every - Если все элементы подходят по условию, то только в таком случае, наш метод вернёт true

const some = [4, "qwq", "sfreferf"];

console.log(some.some(item => typeof (item) === "number"));

console.log(some.every(item => typeof (item) === "number"));

//reduce

// Служит для того, чтобы схлопывать или собирать массив в одно единое целое.
// Возвращает новый массив
// Это метод перебора. Изначально в sum = 0, а current = 4. Выходит вот такая вот схема:
// 0   4
// 4   5
// 9   1
// 10  3
// и так далее
const arr = [4, 5, 1, 3, 2, 6];

// Получаем сумму всех элементов.
// У reduce может быть и 2 аргумент. Вместо sum подставится не 0, а 3. 

const res = arr.reduce((sum, current) => sum + current, 3);

const str = ["apple", "pear", "plum"];

// Хотим получить одну большую строку которая через запятую будет содержать все элементы.
// reduce может спокойно начать и со второго шага: 4 5
const strRes = str.reduce((sum, current) => `${sum}, ${current}`);

console.log(strRes);

// Практический пример. У нас есть объект с сервера. 
// Нужно вытащить имена которые находятся в этом объекте. Мы не может просто сделать obj[0] или что типа того, так как этот объект находится на сервере и нам нужно все это сделать програмно. 

const obj = {
    ivan: "persone",
    ann: "persone",
    dog: "animal",
    cat: "animal"
};

//Object.entries - Данный метод позволяет взять объект и превратить его в матрицу. То есть это будет массив массивов. Массив содержит массивы в которых есть по 2 значения. Первое значение ключ, второе значение.

const newArr = Object.entries(obj)
    .filter(item => item[1] === "persone")
    .map(item => item[0]);

console.log(newArr);