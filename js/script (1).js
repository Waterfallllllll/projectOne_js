/* eslint-disable linebreak-style */
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания

"use strict";

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function () {
//         this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

//         while (this.count == "" || this.count == null || isNaN(this.count)) {
//             this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
//         }
//     },
//     rememberMyFilms: function () {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
//                 b = prompt("На сколько оцените его?", "");

//             if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log("done");
//             } else {
//                 console.log("error");
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function () {
//         if (this.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (this.count >= 10 && this.count < 30) {
//             console.log("Вы классический зритель");
//         } else if (this.count >= 30) {
//             console.log("Вы киноман");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     },
//     showMyDB: function () {
//         if (this.privat) {

//         } else {
//             console.log(personalMovieDB);
//         }
//     },
//     writeYourGenres: function () {
//         let answer;
//         for (let i = 1; i <= 3; i++) {
//             answer = prompt(`Ваш любимый жанр под номером ${i}`, "");
//             if (answer == null || answer == "") {
//                 i--;
//             } else {
//                 this.genres[i - 1] = answer;
//             }
//         }
//         this.genres.forEach(function (item, i) {
//             console.log(`Любимый жанр #${i + 1} - это ${item}`);
//         });
//     },
//     toggleVisibleMyDb: function () {
//         if (this.privat) {
//             this.privat = false;
//         } else {
//             this.privat = true;
//         }
//     }
// };

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB();
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDb();


