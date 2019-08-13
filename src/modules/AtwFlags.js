import React from 'react';
import axios from 'axios';

import { locationsData } from '../App.js';
import AtwTimeDate from "./AtwTimeDate.js";

class AtwFlags extends React.Component {

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
            <div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="location-tags d-none d-xl-block">
                        {locationsData.locations.map ((location, index) => {
				            return (
                                <button onClick={this.handleClick.bind(this,location.timezone_database_name)} key={index} type="button" className="btn btn-info m-1 flag-top">
                                    <div className={location.ISO_3166_1_alpha_2 + " flag-button mx-auto mr-3"}></div>{location.title}, {location.country}
                                </button>
                            );
                        })
                        }
                    </h3>
                </div>
            </div>
            <AtwTimeDate 
            date={this.state.date}
            time={this.state.time} />
            </div>
            )
        }        
    }

export default AtwFlags;