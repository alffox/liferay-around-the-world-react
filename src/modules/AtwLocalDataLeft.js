import React from "react";

import AtwCard from "./AtwCard.js";

class AtwLocalDataLeft extends React.Component {
  render() {
    return (
      <div className="col-md-8">
        <AtwCard
          englishNewsData={this.props.englishNewsData}
          regionalNewsData={this.props.regionalNewsData}
          techNewsData={this.props.techNewsData}
        />
      </div>
    );
  }
}

export default AtwLocalDataLeft;
