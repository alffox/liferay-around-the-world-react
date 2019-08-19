import React from "react";

import AtwNew from "./AtwNew.js";

class AtwNews extends React.Component {
  render() {
    console.log(this.props.newsData);
    return (
      <section>
        <div className="news">
          {this.props.newsData &&
            this.props.newsData.map((article, index) => {
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
      </section>

      // for (var i = 0; i < news.articles.length; i++) {
      //   var newsPicture = news.articles[i].urlToImage;
      //   var newsTitle = news.articles[i].title;
      //   var newsUrl = news.articles[i].url;
      //   var newsSource = news.articles[i].source.name;

      //   if (newsPicture === null || newsPicture.includes("http://")) {
      //       var newsHTML = ('<ul class="list-group"><li class="list-group-item list-group-item-action active d-flex justify-content-between align-items-center mt-1"><a href="' + newsUrl + '" target="_blank" class="list-group-item list-group-item-action active">' + newsTitle + '</a><span class="badge badge-light badge-primary d-none d-xl-block">' + newsSource + '</span></li></ul>');
      //   } else {
      //       var newsHTML = ('<ul class="list-group"><li class="list-group-item list-group-item-action active d-flex justify-content-between align-items-center mt-1"><img class="lazy img-fluid img-thumbnail news-picture" data-src="' + newsPicture + '" alt="' + newsTitle + '"><a href="' + newsUrl + '" target="_blank" class="list-group-item list-group-item-action active">' + newsTitle + '</a><span class="badge badge-light badge-primary d-none d-xl-block">' + newsSource + '</span></li></ul>');
      //   }
    );
  }
}

export default AtwNews;
