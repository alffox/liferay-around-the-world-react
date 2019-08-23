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
    // this.fetchTime(locationsData.locations[0].timezone_database_name);
    // this.fetchEnglishNews(locationsData.locations[0].country);
    // this.fetchHeadlinesNews(locationsData.locations[0].ISO_3166_1_alpha_2);
    // this.fetchTechNews(locationsData.locations[0].ISO_3166_1_alpha_2);
    // this.fetchWeather(locationsData.locations[0].location.lat, locationsData.locations[0].location.lon);
    // this.fetchWeatherForecast(locationsData.locations[0].location.lat, locationsData.locations[0].location.lon);
    // this.fetchMapCoordinates(locationsData.locations[0].location.lat, locationsData.locations[0].location.lon);
    // this.fetchWebCamData(locationsData.locations[0].location.lat, locationsData.locations[0].location.lon, locationsData.locations[0].ISO_3166_1_alpha_2)
    this.fetchWikiData(locationsData.locations[0].country);
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
    // this.fetchTime(currentTimeZoneDBName);
    // this.fetchEnglishNews(currentCountry);
    // this.fetchHeadlinesNews(currentLocationISO_3166_1_alpha_2);
    // this.fetchTechNews(currentLocationISO_3166_1_alpha_2);
    // this.fetchWeather(currentLatitude, currentLongitude);
    // this.fetchWeatherForecast(currentLatitude, currentLongitude);
    // this.fetchMapCoordinates(currentLatitude, currentLongitude)
    // this.fetchWebCamData(currentLatitude, currentLongitude, currentLocationISO_3166_1_alpha_2)
    this.fetchWikiData(currentCountry);
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

  fetchWeatherForecast = (currentLatitude, currentLongitude) => {
    const weatherForecastURL = process.env.REACT_APP_REST_API_SERVER +
      "/forecastEndpoint?lat=" +
      currentLatitude +
      "&lon=" +
      currentLongitude +
      "&units=metric"

    axios
      .get(weatherForecastURL)
      .then(response => response.data)
      .then(data => {
        this.setState({
          forecastData: data.list.filter(item => item.dt_txt.includes("12:00:00"))
        });
      });
  };

  fetchMapCoordinates = (currentLatitude, currentLongitude) => {
    this.setState({
      currentLatitude: currentLatitude,
      currentLongitude: currentLongitude
    });
  };

  fetchWebCamData = (currentLatitude, currentLongitude, currentLocationISO_3166_1_alpha_2) => {
    const webCamDataURL = process.env.REACT_APP_REST_API_SERVER +
      "/webcamEndpoint?countryCode=" +
      currentLocationISO_3166_1_alpha_2 +
      "&lat=" +
      currentLatitude +
      "&lon=" +
      currentLongitude

    axios
      .get(webCamDataURL)
      .then(response => response.data)
      .then(data => {
        this.setState({
          webCamData: data.result.webcams
        });
      });
  };

  fetchWikiData = currentCountry => {
    const wikiDataURL = "https://en.wikipedia.org/api/rest_v1/page/summary/" +
      currentCountry;

    axios
      .get(wikiDataURL)
      .then(response => response.data)
      .then(data => {
        this.setState({
          wikiData: data,
          wikiExtract: data.extract,
          wikiTitle: data.title,
          wikiUrl: data.content_urls.mobile.page
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
          forecastData={this.state.forecastData}
          currentLatitude={this.state.currentLatitude}
          currentLongitude={this.state.currentLongitude}
          webCamData={this.state.webCamData}
          wikiExtract={this.state.wikiExtract}
          wikiTitle={this.state.wikiTitle}
          wikiUrl={this.state.wikiUrl}
        />
      </div>
    );
  }
}

export default App;
