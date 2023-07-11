'use strict';

const numberOfFilms = +	prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDb = {
	count: numberOfFilms,
	movies: {
		
	},
	actors: {
        
	},
	genres: [],
	privat: false
    
};




for (let i = 0; i < 2; i++) {
	
	const	firstAnswer = prompt('Один из последних просмотренных фильмов?', ''),
		secondAnswer = prompt('На сколько оцените', '');

	if (firstAnswer == null || secondAnswer == null || firstAnswer == '' || secondAnswer == '' || firstAnswer.length >= 50) {
		alert('Error');
		i--;
	}


	personalMovieDb.movies[firstAnswer] = secondAnswer;

}

if (personalMovieDb.count < 10) {
	alert('Просмотренно довольно мало фильмов');
} else if (personalMovieDb.count >= 10 && personalMovieDb.count <= 30) {
	alert('Вы классический зритель');
} else if (personalMovieDb.count > 30) {
	alert('Вы киноман');
} else {
	alert('Произошла ошибка');
}

console.log(personalMovieDb);