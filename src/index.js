import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Coloc } from "./Coloc";
import { ColocForm } from "./ColocForm";

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

  handleDelete = (id) => {
    const colocs = [...this.state.colocs];
    colocs.splice(colocs.findIndex(coloc => id === coloc.id), 1);
    this.setState({ colocs });
  };

  handleAdd = name => {
    const colocs = [...this.state.colocs];
    colocs.push({ id: (new Date()).getTime(), name: name });
    this.setState({ colocs });
  };

  render() {
    const title = "Liste de colocs";
    const elements = this.state.colocs.map(coloc => (
      <Coloc details={coloc} onDelete={this.handleDelete}></Coloc>
    ));
    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {elements}
          <ColocForm onClientAdd={this.handleAdd}></ColocForm>
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
