import React from "react";
import { NavLink } from "react-router-dom";
import BaseSection from "app/components/UI/baseSection";

export const ProcessDone = () => {
  return (
    <BaseSection>
      <div className="container h-100">
        <div className="row h-100 text-center">
          <div className="col align-self-center">
            <span>Información diligenciada con éxito</span>
            <span>
              ¡Tu poliza ya está en camino! Pronto la enviaremos a tu correo
              electrónico
            </span>
            <NavLink to="/home">
              <button className="btn btn-primary primary-bu tton">
                Volver al inicio
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </BaseSection>
  );
}
