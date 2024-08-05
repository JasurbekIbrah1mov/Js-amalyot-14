const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");
const details = document.querySelector(".details");
const weatherIcon = document.querySelector(".weather-icon");

const KEY = "96b947a45d33d7dc1c49af3203966408";
//api dan ma'lumot olish va console ga chiqarish
const getData = async (city) => {
  const base = "https://api.openweathermap.org/data/2.5/weather";
  const query = `?q=${city}&appid=${KEY}`;

  const req = await fetch(base + query);
  const data = await req.json();
  return data;
};

//  formadan ma'lumot olish
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const cityName = cityInput.value.trim();
  console.log(cityName);
  cityInput.value = "";

  getData(cityName).then((data) => upData(data));
});
const num = 273.15;
//malumotlarni ekanga chiqarish
const upData = (weather) => {
  console.log(weather);
  details.innerHTML = `
  <h2>Name: ${weather.name}, ${weather.sys.country} </h2>
  <h6>Temperature: ${Math.floor(weather.main.temp - num)}°C</h6>
  <h6>Wind: ${weather.wind.speed} M/S</h6>
  <h6>Humidity: ${weather.main.humidity} %</h6>
  `;
  weatherIcon.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
};