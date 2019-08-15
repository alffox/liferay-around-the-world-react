import React from 'react';

class AtwFlag extends React.Component {

render() {
        return (
            <button onClick={this.props.handleClick.bind(this,this.props.currentLocation,this.props.currentCountry,this.props.currentLocationISO_3166_1_alpha_2,this.props.currentTimeZoneDBName)} key={this.props.index} type="button" className="btn btn-info m-1 flag-top">
                <div className={this.props.classes}></div>{this.props.locationTitle}, {this.props.locationCountry}
            </button>
        )
    }
}

export default AtwFlag;