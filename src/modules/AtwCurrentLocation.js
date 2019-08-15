import React from "react";

class AtwCurrentLocation extends React.Component {
    
  render() {
    return (
        <a className="navbar-brand ml-3" href="/#">
            <div className={this.props.classes}></div>
            <div>{this.props.currentLocation}</div>
            <div className="timedate text-center font-italic"></div>
        </a>
    );
}
}

export default AtwCurrentLocation;