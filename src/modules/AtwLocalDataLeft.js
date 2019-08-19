import React from "react";

import AtwCard from "./AtwCard.js";

class AtwLocalDataLeft extends React.Component {
  render() {
    return (
      <div className="col-md-8">
        <AtwCard 
        newsData={this.props.newsData}/>
      </div>
    );
  }
}

export default AtwLocalDataLeft;
