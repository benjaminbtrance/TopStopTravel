var searchCityEl = document.querySelector('#city-search');
var searchCityBtn = document.querySelector('#city-search-btn');
var searchForm = document.querySelector('#search-form');
var musicEventEl = document.querySelector('#music-event-el');

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

  console.log(musicEventEl);
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
          createCard();
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
          console.log('Sport API Working');
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

function createTicketMasterCard() {
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

  console.log(musicEventEl);
}

// Click Event
searchForm.addEventListener('submit', handleSearchFormSubmit);
