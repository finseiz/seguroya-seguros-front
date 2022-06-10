import React from "react";

export const AboutUs = () => {
  return (
    <div className="container text-left">
      <div className="row mt-5">
        <div
          style={{
            display: "grid",
            alignContent: "center",
          }}
          className="col-sm"
        >
          <img
            width="100%"
            src="/media/images/about_us.jpeg"
            alt=""
            srcset=""
          />
        </div>

        <section className="col-sm">
          <h1 className="home-pages__title mt-4"> ¿Quiénes somos? </h1>

          <div> </div>

          <div className="home-pages__content mt-4">
            <p>
              {" "}
              Somos un agencia colombiana de seguros, que busca revolucionar la
              industria de los seguros a través del mercado digital, ofrecemos
              un servicio rápido, amigable y confiable, 100% virtual y con
              asesoria 24/7. Nuestro proposito es entregar soluciones ajustadas
              a las necesidades de cada cliente, para brindar tranquilidad al
              momento de una situación adversa inesperada.{" "}
            </p>

            <b>
              <p>Contacto</p>
            </b>

            <p>
              {" "}
              <b>Celular: </b> 3204056381{" "}
            </p>
            <p>
              {" "}
              <b>Correo: </b> info@seguroya.co{" "}
            </p>
            <p>
              {" "}
              <b>Dirección: </b> Calle13C #70-87 Cali{" "}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
