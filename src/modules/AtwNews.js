import React from "react";

import AtwEnglishNews from "./AtwEnglishNews.js";
import AtwRegionalNews from "./AtwRegionalNews.js";
import AtwTechNews from "./AtwTechNews.js";

class AtwNews extends React.Component {
  render() {
    return (
      <section>
        <div className="news">
          <AtwEnglishNews englishNewsData={this.props.englishNewsData} />
          <AtwRegionalNews regionalNewsData={this.props.regionalNewsData} />
          <AtwTechNews techNewsData={this.props.techNewsData} />
        </div>
      </section>
    );
  }
}

export default AtwNews;
