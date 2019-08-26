import React from "react";

import AtwNavbarDropDownContinent from "./AtwNavbarDropDownContinent.js"

class AtwNavbarDropDowns extends React.Component {
  render() {
    return (
      <div className="navbar-collapse collapse show" id="navbarDropDowns">
        <ul className="navbar-nav ml-2">
          <AtwNavbarDropDownContinent
            continentName={"Americas"}
            icon={"fas fa-globe-americas"}
            handleClick={this.props.handleClick}
            locationsContinentData={this.props.locationsData.locations.filter(item => item.continent.includes("Americas"))}
          />
          <AtwNavbarDropDownContinent
            continentName={"Europe"}
            icon={"fas fa-globe-europe"}
            handleClick={this.props.handleClick}
            locationsContinentData={this.props.locationsData.locations.filter(item => item.continent.includes("Europe"))}
          />
          <AtwNavbarDropDownContinent
            continentName={"Africa"}
            icon={"fas fa-globe-africa"}
            handleClick={this.props.handleClick}
            locationsContinentData={this.props.locationsData.locations.filter(item => item.continent.includes("Africa"))}
          />
          <AtwNavbarDropDownContinent
            continentName={"Asia-Pacific"}
            icon={"fas fa-globe-asia"}
            handleClick={this.props.handleClick}
            locationsContinentData={this.props.locationsData.locations.filter(item => item.continent.includes("Asia-Pacific"))}
          />
        </ul>
      </div>
    )
  }
}

export default AtwNavbarDropDowns;