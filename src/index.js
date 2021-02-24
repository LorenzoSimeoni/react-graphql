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
    ]
  };

  deleteColoc = (i) => {
    const colocs = this.state.colocs.slice();
    colocs.splice(i, 1);
    this.setState({ colocs: colocs });
  };

  addColoc = () => {
    const colocs = this.state.colocs.slice();
    colocs.push({ id: 6, name: "random" });
    this.setState({ colocs: colocs });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("submit");
  };

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
            <input type="text" placeholder="Ajouter un coloc" />
            <button onClick={this.addColoc}>Confirmer</button>
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
