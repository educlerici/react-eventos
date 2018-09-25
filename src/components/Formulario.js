import React, { Component } from "react";

class Formulario extends Component {
  nombreEventoRef = React.createRef();
  categoriaEventoRef = React.createRef();

  buscarEvento = e => {
    e.preventDefault();

    const datosBusqueda = {
      nombre: this.nombreEventoRef.current.value,
      categoria: this.categoriaEventoRef.current.value
    };

    this.props.obtenerEventos(datosBusqueda);
  };

  mostrarOpciones = key => {
    const categoria = this.props.categorias[key];
    const { id, name_localized } = categoria;

    if (!id || !name_localized) return null;

    return (
      <option key={id} value={id}>
        {name_localized}
      </option>
    );
  };

  render() {
    const categorias = Object.keys(this.props.categorias);
    return (
      <form onSubmit={this.buscarEvento}>
        <legend className="mb-4">Busca tu evento por nombre o categoria</legend>
        <div className="form-row">
          <div className="col">
            <input
              ref={this.nombreEventoRef}
              type="text"
              className="form-control"
              placeholder="Nombre de Evento o Ciudad"
            />
          </div>
          <div className="col">
            <select ref={this.categoriaEventoRef} className="form-control">
              {categorias.map(this.mostrarOpciones)}
            </select>
          </div>
          <div className="col">
            <button
              type="submit"
              className="btn btn-primary btn-block text-white"
            >
              Buscar
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Formulario;
