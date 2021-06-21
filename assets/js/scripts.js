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
	getWeatherForecast(encodedCity);
	getTicketMasterSportEvents(encodedCity);
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

	fetch(apiUrl)
		.then(function (response) {
			if (response.ok) {
				response.json().then(function (data) {
					// console.log(data);
					// console.log('Sport API Working');
          var sportEvents = data._embedded.events
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
					sportEventEl.insertAdjacentHTML('afterbegin', sportEvents);
				});
			} else {
				console.warn(response.statusText);
			}
		})
		.catch(function (error) {
			console.warn('Unable to connect to API');
		});
}

function getWeatherForecast(city) {
	var apiURL =
		'https://api.openweathermap.org/data/2.5/weather?q=' +
		city +
		'&APPID=' +
		openWeatherAPIKey;

	fetch(apiURL)
		.then(function (response) {
			if (response.ok) {
				response.json().then(function (data) {
					// console.log(data);
				});
			} else {
				console.warn(response.statusText);
			}
		})
		.catch(function (error) {
			console.warn('Unable to connect to API');
		});
}

function createWeatherCard() {
	var divColumn = document.createElement('div');
	var divCallout = document.createElement('div');

	divColumn.className = 'column';
	divCallout.className = 'callout';

	musicEventEl.appendChild(divColumn);
	divColumn.appendChild(divCallout);

	for (i = 1; i < 5; i++) {
		var p = document.createElement('p');
		p.setAttribute('class', `p${i}`);
		divCallout.appendChild(p);
	}

	// console.log(musicEventEl);
}

// Click Event
searchForm.addEventListener('submit', handleSearchFormSubmit);
