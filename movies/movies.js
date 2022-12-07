//Most popular Movies
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

//Movies which are being searched
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movie = document.querySelector(".movieDiv");
const getMovies = async (api) => {
  const response = await fetch(api);
  const data = await response.json();
  console.log(data);
  showMovies(data.results);
};

const showMovies = (data) => {
  movie.innerHTML = "";
  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <img src="${IMGPATH + item.poster_path}"/>
  `;

    movie.appendChild(card);

    card.addEventListener("mouseenter", function () {
      const card = document.querySelector(".card");
      const cardDetails = document.createElement("div");
      const cardlay = document.createElement("div");
      cardDetails.appendChild(cardlay);
      cardlay.classList.add("cardlay");
      cardlay.innerHTML = `
    <button class="cardButton">Show Details</button>
  `;
      card.appendChild(cardDetails);

      const cardButton = document.querySelector('.cardButton')
      cardButton.addEventListener('click',function(){
        console.log("clicked")
      })
    });

    card.addEventListener("mouseleave", function(){
      card.innerHTML = `
    <img src="${IMGPATH + item.poster_path}"/>
  `;
    });
  });
};


document
  .getElementById("searchBox")
  .addEventListener("keyup", function (event) {
    if (event.target.value != "") {
      getMovies(SEARCHAPI + event.target.value);
    } else {
      getMovies(APIURL);
    }
  });
getMovies(APIURL);
