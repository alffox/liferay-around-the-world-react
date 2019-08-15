import React from 'react';
import axios from 'axios';

import './App.css';

import locationsData from './locations.json';

import AtwHeader from "./modules/AtwHeader.js";
import AtwFlags from "./modules/AtwFlags.js";
import AtwTimeDate from "./modules/AtwTimeDate.js";

class App extends React.Component {

  state = {}
    
  componentDidMount () {
      this.fetchTime(locationsData.locations[0].timezone_database_name)
  }
  
  handleClick = (seltimeZoneDBName) => {
      this.fetchTime(seltimeZoneDBName)
  }
  
  fetchTime = (seltimeZoneDBName) => {
      const URL = process.env.REACT_APP_REST_API_SERVER + '/TimeDateEndpoint?format=json&by=zone&zone=' + seltimeZoneDBName;
      
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
        <AtwTimeDate
        date={this.state.date}
        time={this.state.time} 
        />
        </div>
      );
    }
   }

export default App;