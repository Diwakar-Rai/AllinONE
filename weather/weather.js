const form = document.querySelector("form");
const searchCity = document.querySelector("#searchCity");
const today = document.querySelector(".today");
const rest = document.querySelector(".rest");

const getInfo = async (city = "New Delhi") => {
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&id=524901&appid=9123cc3c8975d6e1161c83cfa2e3198f&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return showWeather(data);
};

const showWeather = (data) => {
  today.innerHTML = `
    ${data.list[0].weather[0].icon}.png
  `
  rest.innerHTML = ``
}

form.addEventListener("submit", function (event) {
  getInfo(searchCity.value);
  event.preventDefault();
});
getInfo();
