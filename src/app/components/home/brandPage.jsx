import { CarsHomeRoute } from "app/routes/childs/Cars/routes";
import { LifeHomeRoute } from "app/routes/childs/Life/routes";
import { NavLink } from "react-router-dom";
import { toAbsoluteUrl } from "theme/helpers";

function BrandPage() {
  return (
    <section className="container-fluid brand overflow-hidden w-100 m-0">
      <div className="row h-100 m-0">
        <div className="align-self-center text-center">
          <p className="home-msj mx-5">
            Buscamos hacer más fácil y cercano el mundo de los seguros siendo tu
            asesor digital 24/7
          </p>
          <div className="d-flex justify-content-center mt-5">
            <div className="card w-50">
              <div className="card-body">
                <div className="home-msj-2 mb-4">
                  <p className="m-0">
                    ¡Estamos listos para ayudarte!
                  </p>
                  <p className="m-0">
                    Selecciona una opción para cotizar TU SEGURO
                  </p>
                </div>
                <div className="container mt-3">
                  <div className="row separator">
                    <div className="col">
                      <NavLink to={CarsHomeRoute}>
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
                      <NavLink to={LifeHomeRoute}>
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
                    {/* <div className="col">
                      <div className="small-icon">
                        <img
                          src={toAbsoluteUrl("/media/icons/pawprint.svg")}
                          alt="pawprint-icon"
                        />
                      </div>
                      <strong>Mascotas</strong>
                    </div> */}
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
