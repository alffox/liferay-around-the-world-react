import React from "react";

class AtwNavbarDropDownContinent extends React.Component {
    render() {
        return (
            <li className="nav-item dropdown mr-5">
            <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/#">
                Americas
            </a>
            <div className="dropdown-menu" id="americas">
                <a className="dropdown-item" href="/#">
                    <div className="us d-inline-block flag-dropdown"></div>Diamond
                    Bar, USA
                </a>
            </div>
            </li>);
    }
  }
  
export default AtwNavbarDropDownContinent;