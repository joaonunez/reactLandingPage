import React from "react";
import meseros from "../../scripts/cards/meseros";
export function Meseros() {
  return (
    <div className="m-auto d-flex flex-row justify-content-center">
        {meseros.map((mesero)=>(
            <div key={mesero.id+mesero.nombre} className="card col-xxl-2" style={{ width: "18rem" }}>
            <img src={mesero.foto} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{mesero.nombre}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
              <a href="" className="btn btn-primary">
                Enviar Propina
              </a>
            </div>
            </div>
        ))}
    </div>
  );
}
