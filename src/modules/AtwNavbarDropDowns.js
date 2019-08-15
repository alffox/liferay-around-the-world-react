import React from "react";

import AtwNavbarDropDownContinent from "./AtwNavbarDropDownContinent.js"

class AtwNavbarDropDowns extends React.Component {
    render() {
        return (
            <div className="navbar-collapse collapse show" id="navbarDropDowns">
            <ul className="navbar-nav ml-2">
                <AtwNavbarDropDownContinent />
            </ul>
        </div>);
    }
  }
  
  export default AtwNavbarDropDowns;