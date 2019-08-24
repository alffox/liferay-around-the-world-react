import React from "react";

import AtwLocalDataLeft from "./AtwLocalDataLeft.js";
import AtwLocalDataRight from "./AtwLocalDataRight.js";
import AtwLocalDataBottom from "./AtwLocalDataBottom.js";

class AtwLocalData extends React.Component {
  render() {
    return (
      <div className="row">
        <main />
        <AtwLocalDataLeft
          englishNewsData={this.props.englishNewsData}
          regionalNewsData={this.props.regionalNewsData}
          techNewsData={this.props.techNewsData}
        />
        <AtwLocalDataRight
          currentLocation={this.props.currentLocation}
          currentTemperature={this.props.currentTemperature}
          currentWeatherDescription={this.props.currentWeatherDescription}
          currentIconURL={this.props.currentIconURL}
          forecastData={this.props.forecastData}
          currentLatitude={this.props.currentLatitude}
          currentLongitude={this.props.currentLongitude}
          webCamData={this.props.webCamData}
          wikiExtract={this.props.wikiExtract}
          wikiTitle={this.props.wikiTitle}
          wikiUrl={this.props.wikiUrl}
          picturesData={this.props.picturesData}
        />
        <AtwLocalDataBottom
          picturesData={this.props.picturesData}
        />
      </div>
    );
  }
}

export default AtwLocalData;
