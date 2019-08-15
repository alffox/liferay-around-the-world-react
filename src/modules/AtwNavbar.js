import React from "react";
import AtwCurrentLocation from "./AtwCurrentLocation.js";

class AtwNavbar extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-info p-1">            
            <AtwCurrentLocation
            currentLocation={this.props.currentLocation}
            currentCountry={this.props.currentCountry}
            classes={this.props.currentLocationISO_3166_1_alpha_2 + " flag-navbar mx-auto"}
            />  
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarDropDowns" aria-controls="navbarDropDowns" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse show" id="navbarDropDowns">
            <ul className="navbar-nav ml-2">
                <li className="nav-item dropdown mr-5">
                    <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/#">
                        Americas
                    </a>
                    <div className="dropdown-menu" id="americas">
                        <a className="dropdown-item" href="/#">
                            <div className="us d-inline-block flag-dropdown"></div>Diamond
                            Bar, USA
                        </a>
                        <a className="dropdown-item" href="/#">
                            <div className="us d-inline-block flag-dropdown"></div>Chicago,
                            USA
                        </a>
                        <a className="dropdown-item" href="/#">
                            <div className="us d-inline-block flag-dropdown"></div>Hamilton,
                            USA
                        </a>
                        <a className="dropdown-item" href="/#">
                            <div className="us d-inline-block flag-dropdown"></div>Raleigh,
                            USA
                        </a>
                        <a className="dropdown-item" href="/#">
                            <div className="ca d-inline-block flag-dropdown"></div>Markham,
                            Canada
                        </a>
                        <a className="dropdown-item" href="/#">
                            <div className="br d-inline-block flag-dropdown"></div>Recife,
                            Brazil
                        </a>
                        <a className="dropdown-item" href="/#">
                            <div className="br d-inline-block flag-dropdown"></div>São Paulo,
                            Brazil
                        </a>
                    </div>
                </li>
                <li className="nav-item dropdown mr-5">
                    <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/#">
                        Europe
                    </a>
                    <div className="dropdown-menu" id="europe">
                        <a className="dropdown-item" href="/#">
                            <div className="de d-inline-block flag-dropdown"></div>Eschborn,
                            Germany
                        </a>
                        <a className="dropdown-item" href="/#">
                            <div className="es d-inline-block flag-dropdown"></div>Madrid,
                            Spain
                        </a>
                        <a className="dropdown-item" href="/#">
                            <div className="gb d-inline-block flag-dropdown"></div>London,
                            United Kingdom
                        </a>
                        <a className="dropdown-item" href="/#">
                            <div className="ie d-inline-block flag-dropdown"></div>Dublin,
                            Ireland
                        </a>
                        <a className="dropdown-item" href="/#">
                            <div className="it d-inline-block flag-dropdown"></div>Concorezzo,
                            Italy
                        </a>
                        <a className="dropdown-item" href="/#">
                            <div className="hu d-inline-block flag-dropdown"></div>Budapest,
                            Hungary
                        </a>
                        <a className="dropdown-item" href="/#">
                            <div className="fi d-inline-block flag-dropdown"></div>Helsinki,
                            Finland
                        </a>
                        <a className="dropdown-item" href="/#">
                            <div className="fr d-inline-block flag-dropdown"></div>Paris,
                            France
                        </a>
                        <a className="dropdown-item" href="/#">
                            <div className="nl d-inline-block flag-dropdown"></div>Leiden, The
                            Netherlands
                        </a>
                    </div>
                </li>
                <li className="nav-item dropdown mr-5">
                    <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/#">
                        Africa
                    </a>
                    <div className="dropdown-menu" id="africa">
                        <a className="dropdown-item" href="/#">
                            <div className="ma d-inline-block flag-dropdown"></div>Casablanca,
                            Morocco
                        </a>
                    </div>
                </li>
                <li className="nav-item dropdown mr-5">
                    <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/#">
                        Asia-Pacific
                    </a>
                    <div className="dropdown-menu" id="asia-pacific">
                        <a className="dropdown-item" href="/#">
                            <div className="cn d-inline-block flag-dropdown"></div>Dalian,
                            China
                        </a>
                        <a className="dropdown-item" href="/#">
                            <div className="jp d-inline-block flag-dropdown"></div>Tokyo,
                            Japan
                        </a>
                        <a className="dropdown-item" href="/#">
                            <div className="in d-inline-block flag-dropdown"></div>Bangalore,
                            India
                        </a>
                        <a className="dropdown-item" href="/#">
                            <div className="au d-inline-block flag-dropdown"></div>Sydney,
                            Australia
                        </a>
                        <a className="dropdown-item" href="/#">
                            <div className="sg d-inline-block flag-dropdown"></div>Singapore,
                            Singapore
                        </a>
                        <a className="dropdown-item" href="/#">
                            <div className="ae d-inline-block flag-dropdown"></div>Dubai,
                            United Arab Emirates
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    );
  }
}

export default AtwNavbar;
