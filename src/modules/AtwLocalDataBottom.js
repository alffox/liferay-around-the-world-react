import React from "react";

import AtwPicturesCard from "./AtwPicturesCard.js";

class AtwLocalDataBottom extends React.Component {
    render() {
        return (
            <AtwPicturesCard
                picturesData={this.props.picturesData}
            />
        );
    }
}

export default AtwLocalDataBottom;
