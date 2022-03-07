import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/index";
import FormularioCadastro from "./components/FormularioCadastro/index";
import ListaDeCategorias from "./components/ListaDeCategorias/index";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: ["trabalho", "esportes"],
    };
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }

  render() {
    return (
      <div className="conteudo">
        <FormularioCadastro
          criarNota={this.criarNota.bind(this)}
        ></FormularioCadastro>
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.state.categorias}
          ></ListaDeCategorias>
          <ListaDeNotas
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}
          ></ListaDeNotas>
        </main>
      </div>
    );
  }
}

export default App;
