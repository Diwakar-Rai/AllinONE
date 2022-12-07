const API = "632bc553cea6440189e3df9c6903dc00";
const URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API}&page=1`;

const newsBox = document.querySelector(".newsBox");

const getNews = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  showNews(data.articles);
};

const showNews = (data) => {
  // newsBox.innerHTML = '';
  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="image"><img src=${item.urlToImage} alt="" /></div>
        <div class="newsDetails">
          <div class="title">
            <h2>${item.title}</h2>
          </div>
          <div class="desc">
            <p>${item.description}</p>
          </div>
          <div class="info">
          <p>${item.author}</p>
          <p>${item.publishedAt}</p>
          <p class="anchor"><a href=${item.url} target=_blank>Read from Source</a></p>
          </div>
        </div>
        `;
    newsBox.appendChild(card);
  });
};
getNews();
