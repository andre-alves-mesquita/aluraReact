import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handlerMudancaTitulo(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
    console.log(this.titulo);
  }

  _handkerMundancaTexto(event) {
    event.stopPropagation();
    this.texto = event.target.value;
    console.log(this.texto);
  }

  _criarNota(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handlerMudancaTitulo.bind(this)}
        ></input>
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          onChange={this._handkerMundancaTexto.bind(this)}
          className="form-cadastro_input"
        ></textarea>
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
