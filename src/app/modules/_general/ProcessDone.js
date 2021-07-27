import React from "react";
import { Link, NavLink } from "react-router-dom";
import BaseSection from "app/components/UI/baseSection";
import { toAbsoluteUrl } from "theme/helpers/AssetsHelpers";
import { HomeRoute } from "app/routes/routes";

export const ProcessDone = () => {
  return (
    <BaseSection>

      <div className="center-flex text-center" style={{ height: 400 }}>
        <div>

          <b> <p>Información diligenciada con éxito</p> </b>

          <div className="m-4">
          <img
            src={toAbsoluteUrl("/media/icons/big-check.svg")}
            alt="car-icon"
          />
          </div>

          <b> <p> ¡Tu poliza ya está en camino! Pronto la enviaremos a tu correo electrónico </p> </b>

          <Link to={ HomeRoute } >
            <button
              type="button"
              className="btn btn-primary primary-button w-75 mt-3"
            >
              <b> Volver al inicio </b>
            </button>
          </Link>

        </div>
      </div>

    </BaseSection>
  );
}
