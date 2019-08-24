import React from "react";

import AtwFooterAboutButton from "./AtwFooterAboutButton.js";
import AtwFooterNewIssueFeatRequestButton from "./AtwFooterNewIssueFeatRequestButton.js";
import AtwFooterPoweredByButton from "./AtwFooterPoweredByButton.js";

class AtwFooterButtons extends React.Component {
    render() {
        return (
            <div className="row">
                <AtwFooterAboutButton />
                <AtwFooterNewIssueFeatRequestButton />
                <AtwFooterPoweredByButton />
            </div>
        );
    }
}

export default AtwFooterButtons;