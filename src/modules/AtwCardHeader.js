import React from "react";

class AtwCardHeader extends React.Component {
  render() {
    return (
      <div className="card-header py-1">
        Latest local news
        <span className="news-current-location" />
        <p>
          <small>
            Powered by <a href="https://newsapi.org/">News API</a>
          </small>
        </p>
      </div>
    );
  }
}

export default AtwCardHeader;
