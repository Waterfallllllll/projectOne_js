"use strict";

// const req = new Promise((resolve, reject) => { // Это параметры вместо которых у нас будут подставляться функции. Если все хорошо, вызываем resolve, если нет, то вызываем reject.

//     setTimeout(() => {
//         // Дальше идёт имитация асинхронного кода.
//         console.log("Подготовка данных...");

//         const product = {
//             name: "TV",
//             price: 2000
//         }; // Если выполнился product, значит все в порядке и мы должны вызвать функцию resolve

//         resolve(product); // Мы вызываем функцию resolve и передаем аргумент product
//     }, 2000);
// });

// req.then((product) => { // функция вызывается и ей передается в качестве аргумента product.
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = "order";
//             resolve(product); // Это функция выполняется, когда произошла ошибка.
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(data => { // Для того, чтобы обрабатывать положительный результат, у нас есть такой метод как then().then - это метод, который выполняется на промисе в случае положительного исхода. По факту, мы просто передаем эту функцию как аргумент в параметр resolve.
//     console.log(data);
// }).catch(() => {
//     // catch выполнится при какой-то ошибке. Он нужен для того, чтобы обработать reject. catch всегда ставится в конце. Блоки catch нужны для того, что если произошла какая-то ошибка на каком-то этапе, у нас сработает reject и мы сразу перескочим then и перейдём на catch.
//     console.error("Произошла ошибка");
// }).finally(() => {
//     console.log("Finally");
// });

// // Мы делаем определенную цепочку из промисов. Причём then может принимать не только промисы, но и обычные данные.
// // finally используется всегда после обработки всех взаимодействий и обработок ошибок. Он позволяет выполнить нам действия в абсолютно любом исходе промиса, то есть это действия которые должны быть произведены абсолютно всегда. Он ставится всегда в самом конце. Пример его использования: Нам отправляется обещание, что сервер примет успешно данные, либо не примет. Мы можем обработать его с помощью resolve. Если пошло все хорошо по положительному сценарию, то мы какие-то действия выполняем. Если пошло что-то не так, то срабатывает блок кода catch. И в finally мы можем поместить блок кода, где мы очищаем форму. Тут самое главное, что нам не важно, что если форма успешно обработалась или нет. Мы все равно выполняем finally, где форма очищается.

// const test = time => {
//     return new Promise(resolve => { // Можем передавать только resolve, но это редкость.
//         setTimeout(() => resolve(), time);
//     });
// };

// test(1000).then(() => console.log("1000 ms"));
// test(2000).then(() => console.log("2000 ms"));

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log("All");
// }); // Принимаем в себя массив из промисов. Она нужна для того, чтобы удостовериться в том, что все наши промисы уже выполнились. Он ждёт окончание всех промисов которые были переданы сюда в массив и только потом, он будет что-то выполнять.

// Promise.race([test(1000), test(2000)]).then(() => { // Выполняет свои действия только когда самый первый промис уже отработал.
//     console.log("All");
// });



// // Этот код создает пять промисов (p1, p2, p3, p4, p5), каждый из которых имеет свой таймер через setTimeout. Четыре из них (p1 до p4) разрешаются через разное время, передавая разные значения в функцию resolve. p5 отвергается с помощью функции reject.

// // Promise.all используется для ожидания выполнения всех промисов из массива, переданного в качестве аргумента. Он ждет завершения всех промисов в массиве, и если все они разрешаются успешно, то Promise.all разрешает общий промис с массивом значений, которые вернулись из этих промисов.

// // Однако, если хотя бы один из промисов отвергнут (как в случае с p5), то общий промис, созданный Promise.all, сразу же отвергается и возвращается результат отвергнутого промиса.

// // Поскольку p5 отвергнут с помощью функции reject, общий промис, созданный с использованием Promise.all, сразу же отвергается и вызывается console.log(reason), где reason содержит значение "reject". Строка console.log(value) не будет выполнена из-за отверженного промиса в массиве.

// // У метода then из объекта Promise есть возможность принимать два аргумента: первый аргумент представляет функцию, которая будет вызвана в случае успешного выполнения всех промисов (когда все промисы из Promise.all разрешатся успешно), а второй аргумент — это функция, которая будет вызвана в случае отклонения хотя бы одного из промисов (когда хотя бы один из промисов отвергнется).

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "one");
// });
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "two");
// });
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, "three");
// });
// const p4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 4000, "four");
// });
// const p5 = new Promise((resolve, reject) => {
//     reject("reject");
// });
 
// Promise.all([p1, p2, p3, p4, p5]).then(value => {
//     console.log(value);
// }, reason => {
//     console.log(reason);
// });

// ///////////////////////

// const promisify = (item, delay) =>
//     new Promise(resolve => setTimeout(() => resolve(item), delay));
 
// const a = () => promisify("a", 100);
// const b = () => promisify("b", 5000);
// const c = () => promisify("c", 3000);
 
// function one() {
//     const promises = [a(), b(), c()];
//     Promise.all(promises).then(values => console.log(values));
// }
 
// one();


// let promise = new Promise(resolve => {
//     setTimeout(() => resolve("done!"), 1000);
// });

// promise.then(result => console.log(result)); // выведет "done!" спустя одну секунду

let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Ошибка!")), 1000);
});

// .catch(f) это то же самое, что promise.then(null, f)
promise.catch(result => console.log(result)); // выведет "Error: Ошибка!" спустя одну секунду

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve("done!"), ms);
    });
}

delay(3000).then(() => console.log("выполнилось через 3 секунды"));


// friends - список из объектов(друзей)
// где поле "books" - список любимых книг друга
var friends = [
    { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
    { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
    { name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 },
];

// allbooks - список, который будет содержать все книги друзей +
// дополнительный список указанный в initialValue
var allbooks = friends.reduce(
    function (prev, curr) {
        return [...prev, ...curr.books];
    },
    ["Alphabet"],
);

// allbooks = ["Alphabet", "Bible", "Harry Potter", "War and peace",
// "Romeo and Juliet", "The Lord of the Rings", "The Shining"]

