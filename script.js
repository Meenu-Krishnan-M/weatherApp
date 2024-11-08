const API_KEY = 'bd5e378503939ddaee76f12ad7a97608';
const searchButton = document.getElementById('search-button');
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');
const cityName = document.getElementById('city-name');
const weatherIcon = document.getElementById('weather-icon');
const description = document.getElementById('description');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure')
const wind = document.getElementById('wind')
const locality = document.getElementById('locality')
const dateTime = document.getElementById('datetime')



searchButton.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  }
});

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    if (!response.ok) throw new Error('City not found');
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

function displayWeather(data) {
  cityName.textContent = ` ${data.sys.country}`;
  locality.textContent = `${data.name}`
  description.textContent = data.weather[0].description;
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  humidity.textContent = `${data.main.humidity}%`
  pressure.textContent = `${data.main.pressure}`
  wind.textContent = `${data.wind.speed}Kmph`
  dateTime.textContent = new Date().toString();

}
