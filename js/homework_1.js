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

const	firstAnswer = prompt('Один из последних просмотренных фильмов?', ''),
	secondAnswer = prompt('На сколько оцените', ''),
	thirdAnswer = prompt('Один из последних просмотренных фильмов?', ''),
	fourthAnswer = prompt('На сколько оцените', '');

personalMovieDb.movies[firstAnswer] = secondAnswer;
personalMovieDb.movies[thirdAnswer] = fourthAnswer;

console.log(personalMovieDb);