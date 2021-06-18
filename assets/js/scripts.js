var searchCityEl = document.querySelector('#city-search');
var searchCityBtn = document.querySelector('#city-search-btn');

var ticketmasterAPIKey = 'hEhL4sdCUANVnAj4AMyPUUR9qmmjMvXb';

function handleSearchFormSubmit(event) {
	event.preventDefault();

	var citySearchInputVal = document.querySelector('#city-search').value;

	if (!citySearchInputVal) {
		console.error('You need a search input value!');
		return;
	}

	getTicketMasterMusicEvents();
}

function getTicketMasterMusicEvents() {
	var apiUrl =
		'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=Dallas&apikey=' +
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
