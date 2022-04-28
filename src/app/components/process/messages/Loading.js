import React from "react";
import { toAbsoluteUrl } from "theme/helpers/AssetsHelpers";

export const Loading = (props) => {
  console.log("LOADING insurace", props.insurance);
  return (
    <div className="container-sm my-5">
      <div className="mx-5 p-5 bg-white rounded text-center">
        <div>
          <img src={toAbsoluteUrl("/media/images/loading.svg")} />
        </div>

        <div className="mt-4">
          <img src={toAbsoluteUrl("/media/images/points.svg")} />
        </div>

        {props.insurance === "bolivar" && (
          <div className="mt-4">
            <img
              src={toAbsoluteUrl("/media/logos/seguros-bolivar-logo.svg")}
              alt="seguros bolivar"
            />
          </div>
        )}
        {props.insurance === "allianz" && (
          <div className="mt-4">
            <img
              src={toAbsoluteUrl("/media/logos/allianz_logo.svg")}
              alt="seguros bolivar"
            />
          </div>
        )}

        <div
          className="mt-4"
          style={{ color: "#0e1f74", fontWeight: "bold", fontSize: "1.3rem" }}
        >
          Espera un momento
        </div>

        <div className="my-4" style={{ color: "#0e1f74", fontSize: "1rem" }}>
          Estamos buscando los mejores planes
        </div>

        <div className="progress w-50 m-auto">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="5"
            aria-valuemax="100"
            style={{ width: "100%", backgroundColor: "#00b3d9" }}
          ></div>
        </div>
      </div>
    </div>
  );
};
