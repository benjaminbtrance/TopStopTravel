var searchCityEl = document.querySelector('#city-search');
var searchCityBtn = document.querySelector('#city-search-btn');
var city = "";

var ticketmasterAPIKey = 'hEhL4sdCUANVnAj4AMyPUUR9qmmjMvXb';
<<<<<<< HEAD
var weatherAPIKey = "a0aca8a89948154a4182dcecc780b513";
=======
var openWeatherAPIKey = 'bc2194bf2b678d6ec02f05146c48236e';
>>>>>>> main

// Handles Form Event
function handleSearchFormSubmit(event) {
  event.preventDefault();

  var citySearchInputVal = document.querySelector('#city-search').value.trim();

  if (!citySearchInputVal) {
    console.error('You need a search input value!');
    return;
  }

<<<<<<< HEAD
<<<<<<< HEAD
	getTicketMasterMusicEvents();
	getWeatherForecast();
}

function getWeatherForecast(){
	var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" +  + city + "&APPID=" + 
		weatherAPIKey;
	
	fetch(apiURL)
		.then(function (response) {
			if (response.ok) {
				response.json().then(function (data) {
					console.log(data);
				});
			} else {
				console.warn(response.statusText);
			}
		})
		.catch(function (error) {
			console.warn('Unable to connect to API');
		})
=======
	var splitCity = citySearchInputVal.split(' ');
	var encodedCity = splitCity.join('%20');

	// Call API functions
	getTicketMasterMusicEvents(encodedCity);
>>>>>>> main
=======
  var splitCity = citySearchInputVal.split(' ');
  var encodedCity = splitCity.join('%20');

  // Call API functions
  getTicketMasterMusicEvents(encodedCity);
>>>>>>> main
}

function getTicketMasterMusicEvents(city) {
  var apiUrl =
    'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=' +
    city +
    '&apikey=' +
    ticketmasterAPIKey;

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
        });
      } else {
        console.warn(response.statusText);
      }
    })
    .catch(function (error) {
      console.warn('Unable to connect to API');
    });
}

// Click Event
searchCityBtn.addEventListener('click', handleSearchFormSubmit);
