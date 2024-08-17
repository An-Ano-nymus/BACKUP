const API_KEY = "168771779c71f3d64106d8a88376808a";




function getCoordinates(e) {
  
  return [e.latlng.lat , e.latlng.lng];
}












// function mouseMarkersOnClick() {

//   document.getElementById('addmarkers').disabled = true;

  


//   map.setView([e.latlng.lat, e.latlng.lng], 4);

//   var marker = WE.marker([e.latlng.lat, e.latlng.lng]).addTo(map);

//   console.log(e.latlng.lat + ', ' + e.latlng.lng)

//   marker.bindPopup("<b>Hello world!</b><br>I am a popup.<br /><span style='font-size:10px;color:#999'>Tip: Another popup is hidden in Cairo..</span>", {maxWidth: 150, closeButton: true}).openPopup();

//   var marker2 = WE.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
//   marker2.bindPopup("<b>Cairo</b><br>Yay, you found me!<br />Here, enjoy another polygon..", {maxWidth: 120, closeButton: false});
  
  
// }


async function fetchWeatherInfo(weatherContentDiv) {
  const { lat, lng } = getCoordinates(); // Replace with the actual implementation to get coordinates

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`);

    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Clear placeholder text before rendering new data
    weatherContentDiv.textContent = ''; 
    renderWeatherInfo(data, weatherContentDiv);
    
  } catch (err) {
    console.error("Error:", err);
    weatherContentDiv.textContent = 'Error fetching weather data. Please try again later.';
  }
}

function renderWeatherInfo(data, weatherContentDiv) {
  // Check if necessary data exists before rendering
  if (!data || !data.name || !data.sys || !data.weather || !data.main || !data.wind || !data.clouds) {
    console.error('Missing weather data in API response. Check API endpoint and data structure.');
    weatherContentDiv.textContent = 'Incomplete weather data received.';
    return;
  }

  // Create elements to display weather information
  const cityName = document.createElement('p');
  cityName.innerHTML = `<strong>City:</strong> ${data.name}`;

  const countryFlag = document.createElement('img');
  countryFlag.src = `https://flagcdn.com/144x108/${data.sys.country.toLowerCase()}.png`;
  countryFlag.alt = 'Country flag';

  const description = document.createElement('p');
  description.innerHTML = `<strong>Description:</strong> ${data.weather[0].description}`;

  const weatherIcon = document.createElement('img');
  weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  weatherIcon.alt = 'Weather icon';

  const temp = document.createElement('p');
  temp.innerHTML = `<strong>Temperature:</strong> ${data.main.temp.toFixed(2)} °C`;

  const windspeed = document.createElement('p');
  windspeed.innerHTML = `<strong>Wind Speed:</strong> ${data.wind.speed.toFixed(2)} m/s`;

  const humidity = document.createElement('p');
  humidity.innerHTML = `<strong>Humidity:</strong> ${data.main.humidity} %`;

  const clouds = document.createElement('p');
  clouds.innerHTML = `<strong>Cloudiness:</strong> ${data.clouds.all} %`;

  // Append all elements to the weatherContentDiv
  weatherContentDiv.appendChild(cityName);
  weatherContentDiv.appendChild(countryFlag);
  weatherContentDiv.appendChild(description);
  weatherContentDiv.appendChild(weatherIcon);
  weatherContentDiv.appendChild(temp);
  weatherContentDiv.appendChild(windspeed);
  weatherContentDiv.appendChild(humidity);
  weatherContentDiv.appendChild(clouds);
}

function WEATHER_FORECAST_BOX_CREATE() {
  // Create the main div element
  const weatherForecastBox = document.createElement('div');
  weatherForecastBox.classList.add('weather-forecast-box');

  // Create the close button
  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button');
  closeButton.textContent = 'X';
  closeButton.addEventListener('click', () => {
    weatherForecastBox.remove();
  });

  // Add content placeholder to weatherContent div
  const weatherContent = document.createElement('div');
  weatherContent.classList.add('weather-content');
  weatherContent.textContent = 'Loading weather data...'; // Initial placeholder text

  // Append elements to the weather forecast box
  weatherForecastBox.appendChild(closeButton);
  weatherForecastBox.appendChild(weatherContent);

  // Append the weather forecast box to the body
  document.body.appendChild(weatherForecastBox);

  // Call fetchWeatherInfo to populate content asynchronously
  fetchWeatherInfo(weatherContent); // Pass the weatherContent div as an argument
}

function getCoordinates(e) {
  // Replace this with actual logic to retrieve coordinates
  return { lat: 40.7128, lng: -74.0060 }; // Example: New York City coordinates
}

// Example usage:
document.getElementById('showWeatherButton').addEventListener('click', WEATHER_FORECAST_BOX_CREATE);











function cityName() {
  // Get the input value
  const cityName = document.getElementById("PROMPT").value;

  // Do something with the input value
  console.log("You entered: " + cityName);
  return cityName;
}

async function show_Weather_using_city(weatherContentDiv, cityName) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);

    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Clear placeholder text before rendering new data
    weatherContentDiv.textContent = ''; 
    renderWeatherInfoForCity(data, weatherContentDiv);
    
  } catch (err) {
    console.error("Error:", err);
    weatherContentDiv.textContent = 'Error fetching weather data. Please try again later.';
  }
}

function WEATHER_FORECAST_BOX_CREATE_FOR_CITY_NAME() {
  const cityname = cityName();  // Correctly call the cityName function

  if (!cityname) {  // Check if city name is not empty
    alert('Please enter a city name.');
    return;
  }

  // Create the main div element
  const weatherForecastBox = document.createElement('div');
  weatherForecastBox.classList.add('weather-forecast-box');

  // Create the close button
  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button');
  closeButton.textContent = 'X';
  closeButton.addEventListener('click', () => {
    weatherForecastBox.remove();
  });

  // Add content placeholder to weatherContent div
  const weatherContent = document.createElement('div');
  weatherContent.classList.add('weather-content');
  weatherContent.textContent = 'Loading weather data...'; // Initial placeholder text

  // Append elements to the weather forecast box
  weatherForecastBox.appendChild(closeButton);
  weatherForecastBox.appendChild(weatherContent);

  // Append the weather forecast box to the body
  document.body.appendChild(weatherForecastBox);

  // Call fetchWeatherInfo to populate content asynchronously
  show_Weather_using_city(weatherContent, cityname); // Pass the weatherContent div as an argument
}

function renderWeatherInfoForCity(data, weatherContentDiv) {
  // Check if necessary data exists before rendering
  if (!data || !data.name || !data.sys || !data.weather || !data.main || !data.wind || !data.clouds) {
    console.error('Missing weather data in API response. Check API endpoint and data structure.');
    weatherContentDiv.textContent = 'Incomplete weather data received.';
    return;
  }

  // Create elements to display weather information
  const cityNameElem = document.createElement('p');
  cityNameElem.innerHTML = `<strong>City:</strong> ${data.name}`;

  const countryFlag = document.createElement('img');
  countryFlag.src = `https://flagcdn.com/144x108/${data.sys.country.toLowerCase()}.png`;
  countryFlag.alt = 'Country flag';

  const description = document.createElement('p');
  description.innerHTML = `<strong>Description:</strong> ${data.weather[0].description}`;

  const weatherIcon = document.createElement('img');
  weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  weatherIcon.alt = 'Weather icon';

  const temp = document.createElement('p');
  temp.innerHTML = `<strong>Temperature:</strong> ${data.main.temp.toFixed(2)} °C`;

  const windspeed = document.createElement('p');
  windspeed.innerHTML = `<strong>Wind Speed:</strong> ${data.wind.speed.toFixed(2)} Km/h`;

  const humidity = document.createElement('p');
  humidity.innerHTML = `<strong>Humidity:</strong> ${data.main.humidity} %`;

  const clouds = document.createElement('p');
  clouds.innerHTML = `<strong>Cloudiness:</strong> ${data.clouds.all} %`;

  // Append all elements to the weatherContentDiv
  weatherContentDiv.appendChild(cityNameElem);
  weatherContentDiv.appendChild(countryFlag);
  weatherContentDiv.appendChild(description);
  weatherContentDiv.appendChild(weatherIcon);
  weatherContentDiv.appendChild(temp);
  weatherContentDiv.appendChild(windspeed);
  weatherContentDiv.appendChild(humidity);
  weatherContentDiv.appendChild(clouds);
}
