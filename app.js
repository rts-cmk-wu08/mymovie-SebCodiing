const API_KEY = ''
const BASE_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=a068dcb586f22a44b0c64b1b1be088eb&language=en-US&page=1'
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'

getMovies(API_URL);

function getMovies(url) {

        fetch(url).then(res => res.json()).then(data => {
            console.log(data);
            showMovies(data.results);



        })
}


function showMovies(data) {

    data.forEach(movie => {
        const movieElm = document.createElement('div');
        movieElm.classList.add('movie');
        movieElm.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
        <h1>${movie.title}</h1>
        `

        document.body.append(movieElm)
    })
}