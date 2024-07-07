import React from "react";
import { Meseros } from "./subcomponents/Meseros";
export function SeccionMeseros() {
  return (
    <>
      <div className="m-auto text-center col-8 col-xxl-12">
        <h2>En Nuestro Café Nunca Cobramos Propinas...</h2>
        <h6>Por Lo Que Acontinuacion Puedes Dejar Las Propinas Voluntariamente A Través De La Plataforma</h6>
      </div>
      <div>
        <Meseros></Meseros>
      </div>
    </>
  );
}
