import React from "react";
import AtwCurrentLocation from "./AtwCurrentLocation.js";
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
        <AtwNavbarToggler />
      </nav>
    );
  }
}

export default AtwNavbar;
