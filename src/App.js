import React from 'react';
import axios from 'axios';

import './App.css';

import locationsData from './locations.json';

import AtwHeader from "./modules/AtwHeader.js";
import AtwFlags from "./modules/AtwFlags.js";
//import AtwTimeDate from "./modules/AtwTimeDate.js";
import AtwNavbar from "./modules/AtwNavbar.js";

class App extends React.Component {

  state = {}

  componentDidMount () {
    this.fetchCurrentLocation(locationsData.locations[0].title)
    this.fetchCurrentCountry(locationsData.locations[0].country)
    this.fetchCurrentLocationISO_3166_1_alpha_2(locationsData.locations[0].ISO_3166_1_alpha_2)
    this.fetchTime(locationsData.locations[0].timezone_database_name)
  }
  
  handleClick = (currentLocation,currentCountry,currentLocationISO_3166_1_alpha_2,currentTimeZoneDBName) => {
    this.fetchCurrentLocation(currentLocation)
    this.fetchCurrentCountry(currentCountry)
    this.fetchCurrentLocationISO_3166_1_alpha_2(currentLocationISO_3166_1_alpha_2)
    this.fetchTime(currentTimeZoneDBName)
  }

  fetchCurrentLocation = (currentLocation) => {
    this.setState({
      currentLocation: currentLocation
      });
  }

  fetchCurrentCountry = (currentCountry) => {
    this.setState({
      currentCountry: currentCountry
      });
  }

  fetchCurrentLocationISO_3166_1_alpha_2 = (currentLocationISO_3166_1_alpha_2) => {
    this.setState({
      currentLocationISO_3166_1_alpha_2: currentLocationISO_3166_1_alpha_2
      });
  }

  fetchTime = (currentTimeZoneDBName) => {
      const URL = process.env.REACT_APP_REST_API_SERVER + '/TimeDateEndpoint?format=json&by=zone&zone=' + currentTimeZoneDBName;
      
      axios.get(URL).then(response => response.data)
      .then((data) => {
          this.setState({
              date: data.formatted.substr(0,data.formatted.indexOf(' ')),
              time : data.formatted.substr(data.formatted.indexOf(' ')+1)
          })
      })
  }
  
  render() {
      return (
        <div className="container-fluid">
        <AtwHeader/>
        <AtwFlags 
        locationsData={locationsData}
        handleClick={this.handleClick}
        />
        {/* <AtwTimeDate
        date={this.state.date}
        time={this.state.time} 
        /> */}
        <AtwNavbar 
        currentLocation={this.state.currentLocation}
        currentCountry={this.state.currentCountry}
        currentLocationISO_3166_1_alpha_2={this.state.currentLocationISO_3166_1_alpha_2}
        />
        </div>
      );
    }
   }

export default App;