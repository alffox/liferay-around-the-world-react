import React from "react";
import AtwCurrentLocation from "./AtwCurrentLocation.js";
// import AtwSearchLocation from "./AtwSearchLocation.js";
import AtwNavbarDropDowns from "./AtwNavbarDropDowns.js";
import AtwNavbarToggler from "./AtwNavbarToggler.js";

class AtwNavbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-info p-1">
        <AtwCurrentLocation
          currentLocation={this.props.currentLocation}
          currentCountry={this.props.currentCountry}
          classes={
            this.props.currentLocationISO_3166_1_alpha_2 +
            " flag-navbar mx-auto"
          }
        />
        {/* <AtwSearchLocation
          locationsData={this.props.locationsData}
          handleClick={this.props.handleClick} /> */}
        <AtwNavbarDropDowns
          handleClick={this.props.handleClick}
          locationsData={this.props.locationsData}
          locationsDataAmericas={this.props.locationsData.locations.filter(item => item.continent.includes("Americas"))}
        />
        <AtwNavbarToggler />
      </nav>
    );
  }
}

export default AtwNavbar;
