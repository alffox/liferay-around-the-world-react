import React from "react";

class AtwCurrentWeather extends React.Component {
  render() {
    return (
      <div class="weather card-body text-center">
        <p>{this.props.currentLocation}</p>
        <img class="weather-icon-main" src={this.props.currentIconURL} alt={this.props.currentWeatherDescription} />
        <p>{this.props.currentTemperature} °C, {this.props.currentWeatherDescription}
        </p>
        <hr />
      </div>
    );
  }
}

export default AtwCurrentWeather;