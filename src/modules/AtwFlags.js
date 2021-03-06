import React from "react";

import AtwFlag from "./AtwFlag.js";

class AtwFlags extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="location-tags d-none d-xl-block">
            {this.props.locationsData.locations.map((location, index) => {
              return (
                <AtwFlag
                  key={index}
                  handleClick={this.props.handleClick}
                  currentLocation={location.title}
                  currentCountry={location.country}
                  currentLocationISO_3166_1_alpha_2={
                    location.ISO_3166_1_alpha_2
                  }
                  currentTimeZoneDBName={location.timezone_database_name}
                  classes={
                    location.ISO_3166_1_alpha_2 + " flag-button mx-auto mr-3"
                  }
                  currentLatitude={location.location.lat}
                  currentLongitude={location.location.lon}
                  locationTitle={location.title}
                  locationCountry={location.country}
                />
              );
            })}
          </h3>
        </div>
      </div>
    );
  }
}

export default AtwFlags;
