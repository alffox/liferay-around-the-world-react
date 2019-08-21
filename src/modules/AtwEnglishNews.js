import React from "react";

import AtwNew from "./AtwNew.js";

class AtwEnglishNews extends React.Component {
  render() {
    return (
      <div>
        {this.props.englishNewsData &&
          this.props.englishNewsData.map((article, index) => {
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

export default AtwEnglishNews;
