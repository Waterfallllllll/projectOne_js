"use strict";

let numberOfFilms;

function start() {	
	
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDb = {
    count: numberOfFilms,
    movies: {
		
    },
    actors: {
        
    },
    genres: [],
    privat: false
    
};

rememberMyFilms();
detectPersonalLevel();
showMyDb(personalMovieDb.privat);
writeYourGenres();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
	
        const	firstAnswer = prompt("Один из последних просмотренных фильмов?", "").trim(),
            secondAnswer = prompt("На сколько оцените", "");

        if (firstAnswer == null || secondAnswer == null || firstAnswer == "" || secondAnswer == "" || firstAnswer.length >= 50) {
            alert("Error");
            i--;
        }

        personalMovieDb.movies[firstAnswer] = secondAnswer;

    }
}

function detectPersonalLevel() {
    if (personalMovieDb.count < 10) {
        alert("Просмотренно довольно мало фильмов");
    } else if (personalMovieDb.count >= 10 && personalMovieDb.count <= 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDb.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

function showMyDb(hidden) {
    if (!hidden) {
        console.log(personalMovieDb);
    }
}

function writeYourGenres() {
    let myFavoriteGenre = "";
    for (let i = 1; i <= 3; i++) {
        myFavoriteGenre = prompt(`Ваш любимый жанр под номером ${i}`, "");
        personalMovieDb.genres[i - 1] = myFavoriteGenre;
    }	
}

