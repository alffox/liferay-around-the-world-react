import React from "react";

class AtwWebCamsPicture extends React.Component {
    render() {
        return (
            <div className={"carousel-item " + this.props.className}>
                <img className="d-block w-100 img-fluid img-thumbnail webcam-picture"
                    src={this.props.webCamImageURL}
                    alt={this.props.webCamAltText} />
                <p>
                    <small className="font-italic"> {this.props.webCamLocation}, {this.props.webCamRegion}, {this.props.webCamLocationCountry} </small>
                </p>
            </div>
            //     <div className="carousel-item">
            //         <img className="d-block w-100 img-fluid img-thumbnail webcam-picture" src="https://images.webcams.travel/preview/1524588473.jpg" alt="Myrtle Beach: United States" />
            //         <p>
            //             <small className="font-italic"> Myrtle Beach, South Carolina, United States of America
            //                 </small>
            //         </p>
            //     </div>
            // </div>
        );
    }
}

export default AtwWebCamsPicture;