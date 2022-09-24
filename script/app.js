const API_KEY = '3a4fcefe46f3db1f6864e930d246d190'
const BASE_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=a068dcb586f22a44b0c64b1b1be088eb&language=en-US&page=1'
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' 
const popular = BASE_URL + '/discover/movie?sort_by=popular.desc&'
console.log(genres)

let wrapperElm = document.querySelector(".wrapper")



let headerElm = document.createElement("header")
headerElm.innerHTML = `
<button class="button" data-mode="light">Light</button>        
<button class="button" data-mode="dark">Dark</button>
<h1 class="myMovies">MyMovies</h1>
<label class="switch">
  <input type="checkbox">
  <span class="slider round">      
  </span>
</label>
`
wrapperElm.append(headerElm)



let showingElm = document.createElement("section")
showingElm.classList.add("showing")
wrapperElm.append(showingElm)

let nowShowingHeader = document.createElement("header")
nowShowingHeader.classList.add("nowShowingHeader")
nowShowingHeader.innerHTML = `
<h2 class="nowShowing">Now Showing</h2>
<button class="seeMoreBtn">See more</button>
`
showingElm.append(nowShowingHeader)

let showingSlider = document.createElement("div")
showingSlider.classList.add("movieSlider")
showingElm.append(showingSlider)

let popularElm = document.createElement("section")
popularElm.classList.add("popularSection")
wrapperElm.append(popularElm)

let popularHeader = document.createElement("header")
popularHeader.classList.add("popularHeader")
popularHeader.innerHTML = `
<h2 class="popular">Popular</h2>
<button class="seeMoreBtn">See more</button>

`
popularElm.append(popularHeader)


let footerNavBar = document.createElement("footer")
footerNavBar.classList.add("footerNavBar")
footerNavBar.innerHTML = `
<a href="#top"><i class="fa-solid fa-arrow-up"></i></a>
<i class="fa-solid fa-video"></i>
<i class="fa-solid fa-ticket"></i>
<i class="fa-solid fa-bookmark"></i>
`
wrapperElm.append(footerNavBar)


fetch(API_URL).then(res => res.json()).then(data => {
            console.log(data);
            showMovies(data.results);


})

fetch(popular).then(res => res.json()).then(data => {
    console.log(data);
    popularMovies(data.results);


})

function showMovies(data) {
    
    data.forEach(movie => {
        const movieElm = document.createElement('div');
        movieElm.classList.add('movie');
        movieElm.innerHTML = `
        <a href="detail.html?id=${movie.id}">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
        <h1>${movie.title}</h1>
        </a>`

        showingSlider.append(movieElm)
    })
}

function popularMovies(data) {

    data.forEach(movie => {
        console.log(movie)
        const movieElm = document.createElement('article');
        movieElm.classList.add('popular');
        movieElm.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
        <section class="popularSection">
            <h1>${movie.title}</h1>
            <p class="imdb__vote"> <i class="fa-solid fa-star"></i> ${movie.vote_average}/10 IMDb</p>
            <p class="genres"></p>
        </section>
        `

        popularElm.append(movieElm)

        let genreElm = movieElm.querySelector(".genres")
        movie.genre_ids.forEach(id => {
            let currentGenre = genres.find(genre => genre.id == id)
            console.log(currentGenre)
            let genreSpan = document.createElement("span")
            genreSpan.classList.add("genre__pill")
            genreSpan.innerText = currentGenre.name
            genreElm.append(genreSpan)
        })
    })
    
}