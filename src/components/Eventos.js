import React, { Component } from "react";

import Evento from "./Evento";

class Eventos extends Component {
  render() {
    return (
      <div className="row my-5">
        {Object.keys(this.props.eventos).map(key => (
          <Evento key={key} info={this.props.eventos[key]} />
        ))}
      </div>
    );
  }
}

export default Eventos;
