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
    this.fetchNews(
      locationsData.locations[0].country,
      locationsData.locations[0].ISO_3166_1_alpha_2
    );
  }

  handleClick = (
    currentLocation,
    currentCountry,
    currentLocationISO_3166_1_alpha_2,
    currentTimeZoneDBName
  ) => {
    this.fetchCurrentLocation(currentLocation);
    this.fetchCurrentCountry(currentCountry);
    this.fetchCurrentLocationISO_3166_1_alpha_2(
      currentLocationISO_3166_1_alpha_2
    );
    this.fetchTime(currentTimeZoneDBName);
    this.fetchNews(currentCountry, currentLocationISO_3166_1_alpha_2);
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

  fetchNews = (currentCountry,currentLocationISO_3166_1_alpha_2) => {
    //console.log(currentCountry, currentLocationISO_3166_1_alpha_2)

    const topRegionalNewsURL =
      process.env.REACT_APP_REST_API_SERVER +
      "/topHeadlinesEndpoint?pageSize=6&country=" +
      currentLocationISO_3166_1_alpha_2;

    const everythingEnglishNewsURL =
      process.env.REACT_APP_REST_API_SERVER +
      "/everythingNewsEndpoint?domains=nytimes.com,bbc.co.uk,reuters.com&excludeDomains=jpost.com&sortBy=popularity&pageSize=8&q=" +
      currentCountry;

    const topTechNewsURL =
      process.env.REACT_APP_REST_API_SERVER +
      "/topHeadlinesEndpoint?category=technology&pageSize=4&country=" +
      currentLocationISO_3166_1_alpha_2;

    axios
      .get(topRegionalNewsURL, everythingEnglishNewsURL, topTechNewsURL)
      .then(response => response.data)
      .then(data => {
        this.setState({
          newsData: data.articles
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
        newsData={this.state.newsData}/>
      </div>
    );
  }
}

export default App;
