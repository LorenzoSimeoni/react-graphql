import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

export class App extends React.Component {
  state = {
    colocs: [
      { id: 1, name: "Lorenzo" },
      { id: 2, name: "Magdeleine" },
      { id: 3, name: "Baptiste" },
      { id: 4, name: "Cyril" },
      { id: 5, name: "Fabiola" }
    ],
    newColoc: 'Jeanne'
  };

  deleteColoc = (i) => {
    const colocs = this.state.colocs.slice();
    colocs.splice(i, 1);
    this.setState({ colocs: colocs });
  };

  handleSubmit = event => {
    event.preventDefault();
    const colocs = this.state.colocs.slice();
    colocs.push({ id: (new Date()).getTime(), name: this.state.newColoc });
    this.setState({ colocs: colocs, newColoc: '' });
  };

  handleChange = event => {
    const newColoc = event.currentTarget.value;
    this.setState({ newColoc: newColoc });
  }

  render() {
    const title = "Liste de colocs";
    const elements = this.state.colocs.map((coloc, i) => (
      <li key={i}>
        {coloc.name}
        <button onClick={() => this.deleteColoc(i)}>X</button>
      </li>
    ));
    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {elements}
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.newColoc} onChange={this.handleChange} type="text" placeholder="Ajouter un coloc" />
            <button>Confirmer</button>
          </form>
        </ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
