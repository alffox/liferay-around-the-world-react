import React from "react";

import AtwNew from "./AtwNew.js";

class AtwTechNews extends React.Component {
  render() {
    return (
      <div>
        {this.props.techNewsData &&
          this.props.techNewsData.map((article, index) => {
            return (
              <AtwNew
                key={index}
                articleTitle={article.title}
                articleURL={article.url}
                imageURL={article.urlToImage}
                articleSource={article.source.name}
              />
            );
          })}
      </div>
    );
  }
}

export default AtwTechNews;
