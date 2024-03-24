"use strict";

// Каждый раз, когда мы вызываем функцию генератор, она нам дает разный результат, которые идёт последовательно

function* generator() {
    yield "S";
    yield "C";
    yield "R";
    yield "I";
    yield "P";
    yield "T";
}

const str = generator();

console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next().value);
console.log(str.next());
console.log(str.next());
console.log(str.next());

function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

// Если стоит задача запустить конструкцию максимальное кол-во раз, то можно использовать for of
for (let k of count(7)) {
    console.log(k);
}

// Но можем использовать и конструкцию ниже. При каждом вызове next for внутри функции не будет проходить весь цикл. Он будет при каждом next давать текущий результат, и ждать следующего next, чтобы дать следующий результат по циклу.

// const counter = count(7);

// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);


function* logGenerator() {
    console.log(yield);
    console.log(yield);
    console.log(yield);
}

var gen = logGenerator();

// первый вызов next выполняется от начала функции
// и до первого оператора yield
gen.next();
gen.next("pretzel"); // pretzel
gen.next("california"); // california
gen.next("mayonnaise"); // mayonnaise