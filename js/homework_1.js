"use strict";


const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        personalMovieDb.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (personalMovieDb.count == "" || personalMovieDb.count == null || isNaN(personalMovieDb.count)) {
            personalMovieDb.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const	firstAnswer = prompt("Один из последних просмотренных фильмов?", "").trim(),
                secondAnswer = prompt("На сколько оцените", "");

            if (firstAnswer == null || secondAnswer == null || firstAnswer == "" || secondAnswer == "" || firstAnswer.length >= 50) {
                alert("Error");
                i--;
            }
            personalMovieDb.movies[firstAnswer] = secondAnswer;
        }
    },

    detectPersonalLevel: function () {
        if (personalMovieDb.count < 10) {
            alert("Просмотренно довольно мало фильмов");
        } else if (personalMovieDb.count >= 10 && personalMovieDb.count <= 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDb.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },

    showMyDb: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDb);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDb.privat) {
            personalMovieDb.privat = false;
        } else {
            personalMovieDb.privat = true;
        }
    },

    writeYourGenres: function () {
        let myFavoriteGenre = "";
        for (let i = 1; i <= 3; i++) {
            myFavoriteGenre = prompt(`Ваш любимый жанр под номером ${i}`, "");
            personalMovieDb.genres[i - 1] = myFavoriteGenre;
        }	
    }
    
};





