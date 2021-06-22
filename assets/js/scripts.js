var searchCityEl = document.querySelector('#city-search');
var searchCityBtn = document.querySelector('#city-search-btn');
var searchForm = document.querySelector('#search-form');
var musicEventEl = document.querySelector('#music-event-el');
var sportEventEl = document.querySelector('#sport-event-el');

var ticketmasterAPIKey = 'hEhL4sdCUANVnAj4AMyPUUR9qmmjMvXb';
var openWeatherAPIKey = 'bc2194bf2b678d6ec02f05146c48236e';

// Handles Form Event
function handleSearchFormSubmit(event) {
	event.preventDefault();

	var citySearchInputVal = searchCityEl.value.trim();

	if (!citySearchInputVal) {
		return;
	} else {
		searchCityEl.value = '';
	}

	var splitCity = citySearchInputVal.split(' ');
	var encodedCity = splitCity.join('%20');

	// Call API functions
	getTicketMasterMusicEvents(encodedCity);
	getWeather(encodedCity);
	getTicketMasterSportEvents(encodedCity);
	getYelpRestaurants();
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
					var musicEvents = data._embedded.events
						.map((event) => {
							var eventImg;
							for (var i = 0; i < event.images.length; i++) {
								if (event.images[i].height == 360) {
									eventImg = event.images[i].url;
								}
							}

							return `
						<div class="column">
							<div class="callout">
								<p class="event-name">${event.name}</p>
								<img class="event-img" src="${eventImg}" alt="${event.name} consert image"></img>
								<p class="event-date">Date: ${event.dates.start.localDate}</p>
								<p class="event-genre">Genre: ${event.classifications[0].genre.name}</p>
								<a href="${event.url}" class="event-link" target="_blank">Get Ticket Information</a>
							</div>
						</div>
						`;
						})
						.join('');
					musicEventEl.insertAdjacentHTML('afterbegin', musicEvents);
				});
			} else {
				console.warn(response.statusText);
			}
		})
		.catch(function (error) {
			console.warn('Unable to connect to API');
		});
}

function getTicketMasterSportEvents(city) {
	var apiUrl =
		'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=sport&city=' +
		city +
		'&apikey=' +
		ticketmasterAPIKey;
}

function getWeather(city) {
	var apiURL =
		'https://api.openweathermap.org/data/2.5/weather?q=' +
		city +
		'&APPID=' +
		openWeatherAPIKey;

	fetch(apiURL)
		.then(function (response) {
			if (response.ok) {
				response.json().then(function (data) {
					console.log(data);
					getWeatherForecast(data.id);
					// var weatherForecast = data._embedded.events
					// 	.map((event) => {
					// 		var eventImg;
					// 		for (var i = 0; i < event.images.length; i++) {
					// 			if (event.images[i].height == 360) {
					// 				eventImg = event.images[i].url;
					// 			}
					// 		}

					// 		return `
					// 	<div class="column">
					// 		<div class="callout">
					// 			<p class="event-name">${event.name}</p>
					// 			<img class="event-img" src="${eventImg}" alt="${event.name} consert image"></img>
					// 			<p class="event-date">Date: ${event.dates.start.localDate}</p>
					// 			<p class="event-genre">Genre: ${event.classifications[0].genre.name}</p>
					// 			<a href="${event.url}" class="event-link" target="_blank">Get Ticket Information</a>
					// 		</div>
					// 	</div>
					// 	`;
					// 	})
					// 	.join('');
					// weatherForecast.insertAdjacentHTML('afterbegin', sportEvents);
				});
			} else {
				console.warn(response.statusText);
			}
		})
		.catch(function (error) {
			console.warn('Unable to connect to API');
		});
}

function getWeatherForecast(cityId) {
	var apiURL =
		'https://api.openweathermap.org/data/2.5/forecast?id=' +
		cityId +
		'&appid=' +
		openWeatherAPIKey;
	fetch(apiURL)
		.then(function (response) {
			if (response.ok) {
				response.json().then(function (data) {
					console.log(data);
					for (var i = 0; i < 5; i++) {
						var findInList = (i + 1) * 8 - 1;
						var date = new Date(
							data.list[findInList].dt * 1000
						).toLocaleDateString();
						var iconcode = data.list[findInList].weather[0].icon;
						var iconurl =
							'https://openweathermap.org/img/wn/' + iconcode + '.png';
						// get temp from main list
						var temp = data.list[findInList].main.temp;
						// convert to fahrenheit
						var tempToFahrenheit = ((temp - 273.5) * 1.8 + 32).toFixed(2);
						// get humidity from list
						var humidity = data.list[findInList].main.humidity;
						// get wind from list and conver it to mph
						var windSpeed = data.list[findInList].wind.speed;
						var windSpeedMph = (windSpeed * 2.237).toFixed(1);
						//putting all data from the variables of date, img, temp, wind, and humidity on the index page
						$('#Date' + i).html(date);
						$('#Img' + i).html('<img src=' + iconurl + '>');
						$('#Temp' + i).html(tempToFahrenheit + ' &#8457');
						$('#Wind' + i).html(windSpeedMph + ' MPH');
						$('#Humidity' + i).html(humidity + '%');
					}
				});
			} else {
				console.warn(response.statusText);
			}
		})
		.catch(function (error) {
			console.warn('Unable to connect to API');
		});
}

function getYelpRestaurants() {
	var myHeaders = new Headers();
	myHeaders.append(
		'Authorization',
		'Bearer n8v2E5TjbPihl_o58Kh51R69ZdFoREVokJmxAYCwAiLiZLyq_o5MXf2zer6UbAFvqn4YjPXjyAs6lw_KBD3JJKV5l62Ej4-9i7dotEILtxMf0GLJhk5NRwrTf0DRYHYx'
	);

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow',
	};

	fetch(
		'https://api.yelp.com/v3/businesses/search?term=restaurants&location=torrance',
		requestOptions
	)
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
searchForm.addEventListener('submit', handleSearchFormSubmit);
