const API_KEY = '3a4fcefe46f3db1f6864e930d246d190'
const BASE_URL = 'https://api.themoviedb.org/3/movie/'

let params = new URLSearchParams(window.location.search);
let id = params.get("id")
console.log(id)

let wrapperElm = document.querySelector(".wrapper")

let headerElm = document.createElement("header")
headerElm.innerHTML = `
<a href="index.html"> <i class="fa-solid fa-arrow-left"></i></a>
<label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
  </label>
  <button class="button" data-mode="light">Light</button>        
  <button class="button" data-mode="dark">Dark</button>
`
wrapperElm.append(headerElm)


fetch(`${BASE_URL}${id}?api_key=${API_KEY}`)
.then(reponse => reponse.json())
.then(data => {
    console.log(data)
    let hours = Math.floor(data.runtime/60)  
    let minutes = data.runtime % 60

let pictureElm = document.createElement("div")
pictureElm.innerHTML = `
<img class="heroImg" src="https://image.tmdb.org/t/p/w500${data.backdrop_path}" alt="">
`
wrapperElm.append(pictureElm)


let mainElm = document.createElement("div")
mainElm.classList.add("section")
mainElm.innerHTML = `
<h1>${data.title}<i class="fa-solid fa-bookmark"></i></h1>
<p class="genres"></p>
<p class="imdb__vote"> <i class="fa-solid fa-star"></i> ${data.vote_average.toFixed(1)}/10 IMDb</p>
<div class="info">
  <div>
    <p>Length</p>
    <p>${hours}h : ${minutes}min</p>
  </div>
  <div>
    <p>Language</p>
    <p>${data.spoken_languages[0].name}</p>
  </div>
  <div>
    <p>Year</p>
    <p>${data.release_date.split("-")[0]}</p>
  </div>
</div>
<h3 class="description">Description</h3>
<p class="aboutmovie">${data.overview}</p>
<h3 class="cast">Cast</h3>
<div class="castMembers"></div>
<button class="seeMoreBtn">See more</button>
`
wrapperElm.append(mainElm)
let genreElm = mainElm.querySelector(".genres")
data.genres.forEach(genre => {
  let genreSpan = document.createElement("span")
  genreSpan.classList.add("genre__pill")
  genreSpan.innerText = genre.name
  genreElm.append(genreSpan)
})

let castMembersElm = mainElm.querySelector(".castMembers")
console.log(castMembersElm)
fetch(`${BASE_URL}${id}/credits?api_key=${API_KEY}`)
.then(response => response.json())
.then(data => {
  console.log(data)
  data.cast.forEach(member => {
    let memberDiv = document.createElement("div")
    memberDiv.innerHTML = `
    <img class="profile_path" src="https://image.tmdb.org/t/p/w500${member.profile_path}" alt="">
    <p>${member.name}</p>
    `
  castMembersElm.append(memberDiv)
  }) 
})

})