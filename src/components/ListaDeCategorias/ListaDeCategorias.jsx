import React, { Component } from "react";

class ListaDeCategorias extends Component {
  _handleEventoInput(e) {
    if (e.key == "Enter") {
      console.log("adicionar categoria");
    }
  }

  render() {
    return (
      <>
        <ul>
          {this.props.categorias.map((categoria, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="lita-categorias_input"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        ></input>
      </>
    );
  }
}

export default ListaDeCategorias;
