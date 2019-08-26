import React from "react";

import AtwFlags from "./AtwFlags";

class AtwSearchLocation extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [<AtwFlags />],
      input: ''
    }
  }

  onChangeHandler(e) {
    this.setState({
      input: e.target.value,
    })
  }

  render() {
    const list = this.state.data
      .filter(d => this.state.input === '' || d.includes(this.state.input))
      .map((d, index) => <li key={index}>{d}</li>);

    return (
      <div>
        <input value={this.state.input} type="text" onChange={this.onChangeHandler.bind(this)} />
        <ul>{list}</ul>
      </div>)
  }
}

export default AtwSearchLocation;