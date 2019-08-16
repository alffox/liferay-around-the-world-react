import React from "react";

import AtwLocalDataLeft from "./AtwLocalDataLeft.js";
import AtwLocalDataRight from "./AtwLocalDataRight.js";

class AtwLocalData extends React.Component {
  render() {
    return (
      <div className="row">
        <main />
        <AtwLocalDataLeft />
        <AtwLocalDataRight />
      </div>
    );
  }
}

export default AtwLocalData;
