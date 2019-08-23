import React from "react";

import AtwCardHeader from "./AtwCardHeader.js";
import AtwWiki from "./AtwWiki.js";


class AtwWikiCard extends React.Component {
    render() {
        return (
            <div className="card w-100 mt-1">
                <AtwCardHeader
                    cardKey="Wiki"
                    APIAttribution="Wikipedia"
                    APIURL="https://en.m.wikipedia.org/wiki/United_States"
                />
                <AtwWiki
                    wikiExtract={this.props.wikiExtract}
                    wikiTitle={this.props.wikiTitle}
                    wikiUrl={this.props.wikiUrl}
                />
            </div>
        );
    }
}

export default AtwWikiCard;
