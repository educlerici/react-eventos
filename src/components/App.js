import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import "../css/App.css";

import Header from "./Header";
import Formulario from "./Formulario";
import Eventos from "./Eventos";

class App extends Component {
  token = "A3UJMPDUDCLDJFUJATIF";

  state = {
    categorias: [],
    eventos: []
  };

  componentDidMount() {
    this.obtenerCategorias();
  }

  obtenerCategorias = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${
      this.token
    }&locale=es_ES`;

    await fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(categorias => {
        this.setState({
          categorias: categorias.categories
        });
      });
  };

  obtenerEventos = async busqueda => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${
      busqueda.nombre
    }&categories=${busqueda.categoria}&sort_by=date&token=${
      this.token
    }&locale=es_ES`;

    await fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(eventos => {
        this.setState({
          eventos: eventos.events
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Header titulo="Edu Eventos" />
        <div className="container">
          <Formulario
            obtenerEventos={this.obtenerEventos}
            categorias={this.state.categorias}
          />
          <Eventos eventos={this.state.eventos} />
        </div>
      </div>
    );
  }
}

export default App;
