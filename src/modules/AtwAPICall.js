import React from 'react';
import axios from 'axios';

import { locationsData } from '../App.js';

const restAPIServer = 'https://liferay-around-the-world.herokuapp.com';
const URL = restAPIServer + '/TimeDateEndpoint?format=json&by=zone&zone=' + locationsData.locations[0].timezone_database_name;

class AtwAPICall extends React.Component {
    state = {
        timeDate: [],
        time: [],
        date: []
    }

componentDidMount() {
            axios.get(URL).then(response => response.data)
            .then((data) => {
            this.setState({
                timeDate: data,
                date: data.formatted.substr(0,data.formatted.indexOf(' ')),
                time : data.formatted.substr(data.formatted.indexOf(' ')+1)
            })
        })
    }

    render() {
        return (
            <div className="col-md-12 text-info font-weight-bold text-center font-italic">
                <div className="timedate">
                    <i className="far fa-calendar-alt"></i><span className="date px-1">{this.state.date}</span>
                    <i className="far fa-clock"></i><span className="time px-1">{this.state.time}</span>
                </div>
            </div>
        )
      }
    }

export default AtwAPICall;