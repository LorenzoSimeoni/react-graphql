import React, { Component } from "react";

export class Coloc extends Component {
  render() {
    const { details, onDelete } = this.props;
    return (
      <li key={details.id}>
        {details.name}
        <button onClick={() => onDelete(details.id)}>X</button>
      </li>
    )
  }
}

