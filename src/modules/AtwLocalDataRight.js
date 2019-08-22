import React from "react";

import AtwWeatherCard from "./AtwWeatherCard.js";

class AtwLocalDataRight extends React.Component {
  render() {
    return (
      <div className="col-md-4">
        <AtwWeatherCard
          currentLocation={this.props.currentLocation}
          currentTemperature={this.props.currentTemperature}
          currentWeatherDescription={this.props.currentWeatherDescription}
          currentIconURL={this.props.currentIconURL}
          forecastData={this.props.forecastData}
        />
      </div>
    );
  }
}

export default AtwLocalDataRight;
