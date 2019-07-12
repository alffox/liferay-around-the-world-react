import React from 'react';
import { locationsData } from '../App.js';

class AtwFlags extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        
        this.state = {
            city: locationsData.locations[0].title
        };
    }

    handleClick = (selCity) => {
        console.log(selCity);
        this.setState({
            city: selCity
          });
      }
	  
	render() {
        return (
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="location-tags d-none d-xl-block">
                        {locationsData.locations.map ((location, index) => {
				            return (
                                <button onClick={this.handleClick.bind(this,location.title)} key={index} type="button" className="btn btn-info m-1 flag-top">
                                    <div className={location.ISO_3166_1_alpha_2 + " flag-button mx-auto mr-3"}></div>{location.title}, {location.country}
                                </button>
                            );
                        })
                        }
                    </h3>
                </div>
            </div>
            )
        }        
    }

export default AtwFlags;