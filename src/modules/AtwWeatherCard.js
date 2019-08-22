import React from "react";

import AtwCardHeader from "./AtwCardHeader.js";
import AtwCurrentWeather from "./AtwCurrentWeather.js"

class AtwWeatherCard extends React.Component {
    render() {
        return (
            <div className="card w-100 mt-1">
                <AtwCardHeader
                    cardKey="Weather"
                    APIAttribution="OpenWeatherMap.org"
                    APIURL="https://openweathermap.org/"
                />
                <AtwCurrentWeather
                    currentLocation={this.props.currentLocation}
                    currentTemperature={this.props.currentTemperature}
                    currentWeatherDescription={this.props.currentWeatherDescription}
                    currentIconURL={this.props.currentIconURL}
                />
            </div>
        );
    }
}

export default AtwWeatherCard;