import React, { Component } from "react";

export class ColocForm extends Component {
  state = {
    newColoc: 'Jeanne'
  };

  handleChange = event => {
    this.setState({ newColoc: event.currentTarget.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onClientAdd(this.state.newColoc)
    this.setState({ newColoc: '' });
  };

  render() {
    return <form onSubmit={this.handleSubmit}>
      <input value={this.state.newColoc} onChange={this.handleChange} type="text" placeholder="Ajouter un coloc" />
      <button>Confirmer</button>
    </form>
  }
}

