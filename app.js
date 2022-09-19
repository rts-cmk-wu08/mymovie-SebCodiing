const API_KEY = '3a4fcefe46f3db1f6864e930d246d190'
const BASE_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=a068dcb586f22a44b0c64b1b1be088eb&language=en-US&page=1'
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' 
const upcoming = BASE_URL + '/discover/movie?sort_by=upcoming.desc&'

let wrapperElm = document.querySelector(".wrapper")

let showingElm = document.createElement("section")
showingElm.classList.add("showing")
wrapperElm.append(showingElm)

let upcomingElm = document.createElement("section")
upcomingElm.classList.add("upcoming")
wrapperElm.append(upcomingElm)




fetch(API_URL).then(res => res.json()).then(data => {
            console.log(data);
            showMovies(data.results);


})

fetch(upcoming).then(res => res.json()).then(data => {
    console.log(data);
    upcomingMovies(data.results);


})

function showMovies(data) {

    data.forEach(movie => {
        const movieElm = document.createElement('div');
        movieElm.classList.add('movie');
        movieElm.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
        <h1>${movie.title}</h1>
        `

        showingElm.append(movieElm)
    })
}

function upcomingMovies(data) {

    data.forEach(movie => {
        const movieElm = document.createElement('div');
        movieElm.classList.add('upcoming');
        movieElm.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
        <h1>${movie.title}</h1>
        `

        upcomingElm.append(movieElm)
    })

}