import { LifeHomeRoute } from "app/routes/childs/Life/routes";
import { NavLink } from "react-router-dom";
import { toAbsoluteUrl } from "theme/helpers";

function BrandPage() {
  return (
    <section className="container-fluid brand overflow-hidden w-100 m-0">
      <div className="row h-100 m-0">
        <div className="col align-self-center">
          <p>
            Buscamos hacer más fácil y cercano el mundo de los seguros siendo tu
            asesor digital 24/7
          </p>
          <div className="col d-flex justify-content-center">
            <div className="card">
              <div className="card-body">
                <span>
                  ¡Estamos listos para ayudarte! Selecciona una opción para
                  cotizar un seguro
                </span>
                <div className="container mt-3">
                  <div className="row">
                    <div className="col">
                      <NavLink to="/cars">
                        <div className="small-icon">
                          <img
                            src={toAbsoluteUrl("/media/icons/car.svg")}
                            alt="car-icon"
                          />
                        </div>
                        <strong>Autos</strong>
                      </NavLink>
                    </div>
                    <div className="col">
                      <NavLink to={ LifeHomeRoute }>
                        <div className="small-icon">
                          <img
                            src={toAbsoluteUrl("/media/icons/healthcare.svg")}
                            alt="life-icon"
                          />
                        </div>
                        <strong>Vida</strong>
                      </NavLink>
                    </div>
                    <div className="col">
                      <NavLink to="/health">
                        <div className="small-icon">
                          <img
                            src={toAbsoluteUrl("/media/icons/heart.svg")}
                            alt="heart-icon"
                          />
                        </div>
                        <strong>Salud</strong>
                      </NavLink>
                    </div>
                    <div className="col">
                      <div className="small-icon">
                        <img
                          src={toAbsoluteUrl("/media/icons/card-01.svg")}
                          alt="card-icon"
                        />
                      </div>
                      <strong>SOAT</strong>
                    </div>
                    <div className="col">
                      <div className="small-icon">
                        <img
                          src={toAbsoluteUrl("/media/icons/pawprint.svg")}
                          alt="pawprint-icon"
                        />
                      </div>
                      <strong>Mascotas</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandPage;
