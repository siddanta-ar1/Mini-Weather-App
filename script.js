const apiKey = "25325f29244b61e4e68094875943371a"; 

const searchBtn = document.getElementById("search-button");  // Corrected
const cityInput = document.getElementById("city-input");      // Corrected
const weatherInfo = document.getElementById("weather-info");  // Corrected

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }
  
    getWeather(city);  
});

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found!");
        }
        const data = await response.json();
        showWeather(data);
    } catch (error) {
        weatherInfo.innerHTML = `<p>${error.message}</p>`;
    }
}

function showWeather(data) {
    const { name } = data;
    const { temp } = data.main;
    const { description } = data.weather[0];
    const { speed } = data.wind;

    weatherInfo.innerHTML = `
      <p>📍 City: ${name}</p>
      <p>🌡 Temp: ${temp} °C</p>
      <p>🌥 Condition: ${description}</p>
      <p>🌬 Wind Speed: ${speed} m/s</p>
    `;
}
