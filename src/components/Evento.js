import React from "react";

const Evento = props => {
  const { name } = props.info;

  if (!name) return null;

  let descripcion = props.info.description.text;

  if (descripcion.length > 250) {
    descripcion = descripcion.substr(0, 250);
  }

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        {props.info.logo !== null ? (
          <img
            className="card-img-top"
            src={props.info.logo.url}
            alt={props.info.name.text}
          />
        ) : (
          ""
        )}
        <div className="card-body">
          <h5 className="card-title">{props.info.name.text}</h5>
          <p className="card-text">{descripcion}</p>
        </div>

        <div class="card-footer">
          <a href={props.info.url} target="_blank" class="card-link">
            Más Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Evento;
