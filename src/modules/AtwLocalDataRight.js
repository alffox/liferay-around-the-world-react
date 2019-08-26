import React from "react";

import AtwWeatherCard from "./AtwWeatherCard.js";
import MapContainer from "./MapContainer.js"
import AtwWebCamCard from "./AtwWebCamCard.js";
import AtwWikiCard from "./AtwWikiCard.js";

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
        <MapContainer
          currentLatitude={this.props.currentLatitude}
          currentLongitude={this.props.currentLongitude}
        />
        <AtwWebCamCard
          webCamData={this.props.webCamData}
        />
        <AtwWikiCard
          wikiExtract={this.props.wikiExtract}
          wikiTitle={this.props.wikiTitle}
          wikiUrl={this.props.wikiUrl}
        />
      </div>
    );
  }
}

export default AtwLocalDataRight;
