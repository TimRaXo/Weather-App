// Variables to store city name and references to HTML elements
let city = "";

const apiKey = "9957a4efe20e45a1834151251260806"; // Free tier API Key from WeatherAPI.com, i know its not secure to have it here but its just for testing purposes, and i dont care if someone steals it, its free and i can just make a new one if needed.

const searchButton = document.getElementById("search-button");
const cityInput = document.getElementById("city-input");

const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const feelsLikeElement = document.getElementById("feels-like");
const humidityElement = document.getElementById("humidity");
const windSpeedElement = document.getElementById("wind-speed");
const windDirectionElement = document.getElementById("wind-direction");
const pressureElement = document.getElementById("pressure");
const visibilityElement = document.getElementById("visibility");
const cloudinessElement = document.getElementById("cloudiness");

// Event listener for the search button
searchButton.addEventListener("click", function() {
    city = cityInput.value;
    console.log("City entered: " + city);

    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = "Location: " + data.location.name;
            temperatureElement.textContent = "Temperature: " + data.current.temp_c + "°C";
            feelsLikeElement.textContent = "Feels Like: " + data.current.feelslike_c + "°C";
            humidityElement.textContent = "Humidity: " + data.current.humidity + "%";
            windSpeedElement.textContent = "Wind Speed: " + data.current.wind_kph + " km/h";
            windDirectionElement.textContent = "Wind Direction: " + data.current.wind_dir;
            pressureElement.textContent = "Pressure: " + data.current.pressure_mb + " mb";
            visibilityElement.textContent = "Visibility: " + data.current.vis_km + " km";
            cloudinessElement.textContent = "Cloudiness: " + data.current.cloud + "%";
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
});