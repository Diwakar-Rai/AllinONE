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
  // console.log(data);
  showMovies(data.results);
};

const showMovies = (data) => {
  movie.innerHTML = "";
  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div class="image">
    <img src="${item.poster_path===null?"./imageNotFound.jpg":IMGPATH + item.poster_path}"/>
    <p class="desc">${item.overview}</p>

    </div>
    <div class="detail">
      <div class="movieName">
      ${item.original_title}
      </div>
      <div class="rating">
      ${item.vote_average}
      </div>
      </div>
  `;

    movie.appendChild(card);

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
