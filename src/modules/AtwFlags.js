import React from 'react';
import {locationsData} from '../App.js';

console.log(locationsData.locations);

class AtwFlags extends React.Component {
	  
	render() {
        return (
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="location-tags d-none d-xl-block">
                        {locationsData.locations.map ((location, index) => {
				            return (
                                <button key={index} type="button" className="btn btn-info m-1 flag-top">
                                    <div className={locationsData.locations[index].ISO_3166_1_alpha_2 + " flag-button mx-auto mr-3"}></div>{locationsData.locations[index].title}, {locationsData.locations[index].country}
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