import React from "react";

import AtwCardHeader from "./AtwCardHeader.js";
import AtwNews from "./AtwNews.js";

class AtwCard extends React.Component {
  render() {
    return (
      <div className="card w-100 mt-1">
        <AtwCardHeader />
        <AtwNews
          englishNewsData={this.props.englishNewsData}
          regionalNewsData={this.props.regionalNewsData}
          techNewsData={this.props.techNewsData}
        />
      </div>
    );
  }
}

export default AtwCard;
