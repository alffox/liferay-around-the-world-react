import React from "react";
import axios from "axios";

import "./App.css";

import locationsData from "./locations.json";

import AtwHeader from "./modules/AtwHeader.js";
import AtwFlags from "./modules/AtwFlags.js";
//import AtwTimeDate from "./modules/AtwTimeDate.js";
import AtwNavbar from "./modules/AtwNavbar.js";
import AtwLocalData from "./modules/AtwLocalData.js";

class App extends React.Component {
  state = {};

  componentDidMount() {
    this.fetchCurrentLocation(locationsData.locations[0].title);
    this.fetchCurrentCountry(locationsData.locations[0].country);
    this.fetchCurrentLocationISO_3166_1_alpha_2(
      locationsData.locations[0].ISO_3166_1_alpha_2
    );
    this.fetchTime(locationsData.locations[0].timezone_database_name);
    this.fetchEnglishNews(locationsData.locations[0].country);
    this.fetchHeadlinesNews(locationsData.locations[0].ISO_3166_1_alpha_2);
    this.fetchTechNews(locationsData.locations[0].ISO_3166_1_alpha_2);
    this.fetchWeather(locationsData.locations[0].location.lat, locationsData.locations[0].location.lon);
  }

  handleClick = (
    currentLocation,
    currentCountry,
    currentLocationISO_3166_1_alpha_2,
    currentTimeZoneDBName,
    currentLatitude,
    currentLongitude
  ) => {
    this.fetchCurrentLocation(currentLocation);
    this.fetchCurrentCountry(currentCountry);
    this.fetchCurrentLocationISO_3166_1_alpha_2(
      currentLocationISO_3166_1_alpha_2
    );
    this.fetchTime(currentTimeZoneDBName);
    this.fetchEnglishNews(currentCountry);
    this.fetchHeadlinesNews(currentLocationISO_3166_1_alpha_2);
    this.fetchTechNews(currentLocationISO_3166_1_alpha_2);
    this.fetchWeather(currentLatitude, currentLongitude)
  };

  fetchCurrentLocation = currentLocation => {
    this.setState({
      currentLocation: currentLocation
    });
  };

  fetchCurrentCountry = currentCountry => {
    this.setState({
      currentCountry: currentCountry
    });
  };

  fetchCurrentLocationISO_3166_1_alpha_2 = currentLocationISO_3166_1_alpha_2 => {
    this.setState({
      currentLocationISO_3166_1_alpha_2: currentLocationISO_3166_1_alpha_2
    });
  };

  fetchTime = currentTimeZoneDBName => {
    const URL =
      process.env.REACT_APP_REST_API_SERVER +
      "/TimeDateEndpoint?format=json&by=zone&zone=" +
      currentTimeZoneDBName;

    axios
      .get(URL)
      .then(response => response.data)
      .then(data => {
        this.setState({
          date: data.formatted.substr(0, data.formatted.indexOf(" ")),
          time: data.formatted.substr(data.formatted.indexOf(" ") + 1)
        });
      });
  };

  fetchEnglishNews = currentCountry => {
    const englishNewsURL =
      process.env.REACT_APP_REST_API_SERVER +
      "/everythingNewsEndpoint?domains=nytimes.com,bbc.co.uk,reuters.com&excludeDomains=jpost.com&sortBy=popularity&pageSize=8&q=" +
      currentCountry;

    axios
      .get(englishNewsURL)
      .then(response => response.data)
      .then(data => {
        this.setState({
          englishNewsData: data.articles
        });
      });
  };

  fetchHeadlinesNews = currentLocationISO_3166_1_alpha_2 => {
    const regionalNewsURL =
      process.env.REACT_APP_REST_API_SERVER +
      "/topHeadlinesEndpoint?pageSize=6&country=" +
      currentLocationISO_3166_1_alpha_2;

    axios
      .get(regionalNewsURL)
      .then(response => response.data)
      .then(data => {
        this.setState({
          regionalNewsData: data.articles
        });
      });
  };

  fetchTechNews = currentLocationISO_3166_1_alpha_2 => {
    const techNewsURL =
      process.env.REACT_APP_REST_API_SERVER +
      "/topHeadlinesEndpoint?category=technology&pageSize=4&country=" +
      currentLocationISO_3166_1_alpha_2;

    axios
      .get(techNewsURL)
      .then(response => response.data)
      .then(data => {
        this.setState({
          techNewsData: data.articles
        });
      });
  };

  fetchWeather = (currentLatitude, currentLongitude) => {
    const weatherURL = process.env.REACT_APP_REST_API_SERVER +
      "/weatherEndpoint?lat=" +
      currentLatitude +
      "&lon=" +
      currentLongitude +
      "&units=metric"

    axios
      .get(weatherURL)
      .then(response => response.data)
      .then(data => {
        this.setState({
          currentTemperature: Math.round(data.main.temp),
          currentWeatherDescription: data.weather[0].main,
          currentIconURL: "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
        });
      });

  };

  render() {
    return (
      <div className="container-fluid">
        <AtwHeader />
        <AtwFlags
          locationsData={locationsData}
          handleClick={this.handleClick}
        />
        {/* <AtwTimeDate date={this.state.date} time={this.state.time} /> */}
        <AtwNavbar
          currentLocation={this.state.currentLocation}
          currentCountry={this.state.currentCountry}
          currentLocationISO_3166_1_alpha_2={
            this.state.currentLocationISO_3166_1_alpha_2
          }
        />
        <AtwLocalData
          currentLocation={this.state.currentLocation}
          englishNewsData={this.state.englishNewsData}
          regionalNewsData={this.state.regionalNewsData}
          techNewsData={this.state.techNewsData}
          currentTemperature={this.state.currentTemperature}
          currentWeatherDescription={this.state.currentWeatherDescription}
          currentIconURL={this.state.currentIconURL}
        />
      </div>
    );
  }
}

export default App;
