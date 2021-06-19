var searchCityEl = document.querySelector('#city-search');
var searchCityBtn = document.querySelector('#city-search-btn');

var ticketmasterAPIKey = 'hEhL4sdCUANVnAj4AMyPUUR9qmmjMvXb';
var openWeatherAPIKey = 'bc2194bf2b678d6ec02f05146c48236e';

// Handles Form Event
function handleSearchFormSubmit(event) {
  event.preventDefault();

  var citySearchInputVal = document.querySelector('#city-search').value.trim();

  if (!citySearchInputVal) {
    console.error('You need a search input value!');
    return;
  }

  var splitCity = citySearchInputVal.split(' ');
  var encodedCity = splitCity.join('%20');

<<<<<<< HEAD
	// Call API functions
	getTicketMasterMusicEvents(encodedCity);
	getTicketMasterSportEvents(encodedCity);
=======
  // Call API functions
  getTicketMasterMusicEvents(encodedCity);
>>>>>>> 6e7cc77c79016cb98c9ae624686f7c49b23a2076
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
