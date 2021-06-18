<div class="container">
        <!--Row for searching a city-->
        <div class="row">
            <div class="col-sm-4 bg-light">
                <!--Here we create an HTML form for handling the inputs-->
                <h4 class="pt-1"><strong>Search for a City:</strong></h4>
                <!--Here we create the text box for capturing the search city Name-->
                <div class="input-group mb-3">
                    <input type="text" class="form-control"id="search-city" aria-label="City Search" aria-describedby="search-button">
                    <div class="input-group-append">
                        <button class=" btn bg-primary text-light" id="search-button"><i class="fa fa-search"></i></button>
                    </div>
                </div>
                <!--section for search city history-->
                <button class=" btn btn-primary" type="button" id="clear-data">Clear Data</button>
                <ul class="list-group">

                </ul>
            </div>   
            <div class="col-sm-8">
                <div class="row ml-2 border border-dark rounded">
                    <div class="col-sm-12" id="current-weather">
                        <h3 class="city-name mb-1 mt-2 bolder" id="current-city"></h3>
                        <p>Temperature: <span class="current" id="temperature"> </span></p>
                        <p>Humidity: <span class="current" id="humidity"> </span></p> 
                        <p>Wind Speed: <span class="current" id="wind-speed"> </span></p>
                        <p>UV index: <span class="current rounded py-2 px-2" id="uv-index"></span></p> 
                    </div>
                </div>
                <!--Row for future data to be dumped here-->
                <div class="col-sm-12" id ="future-weather">
                    <h3>5-Day Forecast:</h3>
                    <div class="row text-light">
                        <div class="col-sm-2 forecast text-white ml-2 mb-3 p-2 mt-2 rounded">
                            <p id="fDate0"></p>
                            <p id="fImg0"></p>
                            <p>Temp: <span id="fTemp0"></span></p>
                            <p>Wind: <span id="fWind0"></span></p>
                            <p>Humidity: <span id="fHumidity0"></span></p>
                        </div>
                        <div class="col-sm-2 forecast text-white ml-2 mb-3 p-2 mt-2 rounded">
                            <p id="fDate1"></p>
                            <p id="fImg1"></p>
                            <p>Temp: <span id="fTemp1"></span></p>
                            <p>Wind: <span id="fWind1"></span></p>
                            <p>Humidity: <span id="fHumidity1"></span></p>
                        </div>
                        <div class="col-sm-2 forecast text-white ml-2 mb-3 p-2 mt-2 rounded">
                            <p id="fDate2"></p>
                            <p id="fImg2"></p>
                            <p>Temp: <span id="fTemp2"></span></p>
                            <p>Wind: <span id="fWind2"></span></p>
                            <p>Humidity: <span id="fHumidity2"></span></p>
                        </div>
                        <div class="col-sm-2 forecast text-white ml-2 mb-3 p-2 mt-2 rounded">
                            <p id="fDate3"></p>
                            <p id="fImg3"></p>
                            <p>Temp: <span id="fTemp3"></span></p>
                            <p>Wind: <span id="fWind3"></span></p>
                            <p>Humidity: <span id="fHumidity3"></span></p>
                        </div>
                        <div class="col-sm-2 forecast text-white ml-2 mb-3 p-2 mt-2 rounded">
                            <p id="fDate4"></p>
                            <p id="fImg4"></p>
                            <p>Temp: <span id="fTemp4"></span></p>
                            <p>Wind: <span id="fWind4"></span></p>
                            <p>Humidity: <span id="fHumidity4"></span></p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <!--jQuery JS-->
    <script src="https://code.jquery.com/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.bundle.min.js"></script>