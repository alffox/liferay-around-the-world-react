import React from "react";

import AtwCardHeader from "./AtwCardHeader.js";
import AtwNews from "./AtwNews.js";

class AtwCard extends React.Component {
  render() {
    return (
      <div className="card w-100 mt-1">
        <AtwCardHeader />
        <AtwNews 
        newsData={this.props.newsData} />
      </div>
    );
  }
}

export default AtwCard;
