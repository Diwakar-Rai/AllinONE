const form = document.querySelector("form");
const searchCity = document.querySelector("#searchCity");
const today = document.querySelector(".today");
const rest = document.querySelector(".rest");

function date(timestamp){
  let today = new Date(timestamp);
  let todayDate = today.toDateString();

  return todayDate;
}

function time(timestamp){
  let time = new Date(timestamp);
  let displayTime = time.getHours() +":"+ time.getMinutes();

  return displayTime;
}
 

const getInfo = async (city = "New Delhi") => {
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&id=524901&appid=9123cc3c8975d6e1161c83cfa2e3198f&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return showWeather(data);
};

const showWeather = (data) => {
  let cityDate = date(`${data.list[0].dt_txt}`)
  today.innerHTML = `
  <div class="city">
  <div class="cityFirstDiv">
    <h3 class="cityName">${data.city.name}</h3>
    <p>${cityDate}</p>
  </div>
  <div class="citySecondDiv">
    <p><i class="fa-solid fa-location-dot"></i> ${data.city.coord.lat},
    ${data.city.coord.lon}</p>
  </div>
</div>
<div class="icon">
<div>
<img src="http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png
">
</div>
<div>${data.list[0].weather[0].description}</div>
</div>
<div class="otherInfo">
  <div class="info-row"><div><i class="fa-solid fa-temperature-half"></i> Temperature </div><div>${data.list[0].main.temp} &#8451;</div></div>
  <div class="info-row"><div><i class="fa-solid fa-temperature-sun"></i> Max Temperature</div><div> ${data.list[0].main.temp_max} &#8451;</div></div>
  <div class="info-row"><div><i class="fa-solid fa-temperature-snow"></i> Min Temperature</div><div> ${data.list[0].main.temp_min} &#8451;</div></div>
  <div class="info-row"><div><i class="fa-solid fa-temperature-three-quarters"></i> Feels Like</div><div> ${data.list[0].main.feels_like} &#8451;</div></div>
  <div class="info-row"><div><i class="fa-solid fa-droplet-degree"></i> Humidity</div><div> ${data.list[0].main.humidity} %</div></div>
  <div class="info-row"><div><i class="fa-solid fa-compress"></i> Pressure</div><div> ${data.list[0].main.pressure} mbar</div></div>
  <div class="info-row"><div><i class="fa-sharp fa-solid fa-sunrise"></i> Sunrise</div><div> ${time(data.city.sunrise)} AM</div></div>
  <div class="info-row"><div><i class="fa-sharp fa-solid fa-sunset"></i> Sunset</div><div> ${time(data.city.sunset)} PM</div></div>
</div>
  `
  for (let i = 1; i <= 5; i++) {

    rest.innerHTML += `
    <div class="row">
      <div class="restIcon">
        <div><img src="http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png" alt=""></div>
        <div>${data.list[i].weather[0].description}</div>
      </div>
      <div class="row-right">
        <div><h3>${date(data.list[0].dt)}</h3></div>
        <div class="addInfo">
          <div class="temp">
            <div><p><i class="fa-solid fa-temperature-sun"></i> Max Temperature ${data.list[i].main.temp_max} &#8451;</p></div>
            <div><p><i class="fa-solid fa-temperature-snow"></i> Min Temperature ${data.list[i].main.temp_min} &#8451;</p></div>
          </div>
          <div class="sun">
            <div><p> Humidity ${data.list[i].main.humidity} %</p></div>
            <div><p> Pressure ${data.list[i].main.pressure} mbar</p></div>
          </div>
        </div>
      <div>
  </div>
    `
  }
}

form.addEventListener("submit", function (event) {
  rest.innerHTML = '';
  getInfo(searchCity.value);
  event.preventDefault();
});
getInfo();
