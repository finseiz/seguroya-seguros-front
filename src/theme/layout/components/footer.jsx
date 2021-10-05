import Navbar from "react-bootstrap/Navbar";
import { toAbsoluteUrl } from "../../helpers";
import { NavLink } from "react-router-dom";
import { AboutUsRoute, FrequentQuestionsRoute, HomeRoute, OffersRoute } from "app/routes/routes";


function Footer() {
  return (
    <Navbar className="bg-dark-blue footer">
      <div className="container-fluid mx-5 py-4 text-white">
        <div className="row m-0 w-100">
          <div className="col-4">
            <img
              className="logo"
              src={toAbsoluteUrl("/media/logos/logo_seguroya_light.svg")}
              alt="logo-seguroya-light"
            />
            <p className="my-4">
              Compañías encargadas de la expedición de nuestras polizas
            </p>
            <div className="d-flex flex-row my-4">
              <img
                className="logo"
                src={toAbsoluteUrl("/media/logos/seguros-del-estado-logo.svg")}
                alt="logo-seguro-del-estado"
              />
              <img
                className="logo ml-2"
                src={toAbsoluteUrl("/media/logos/seguros-mundial-logo.svg")}
                alt="logo-seguros-mundiales"
              />
            </div>
          </div>
          <div className="col-3">
            <ul>
              <li>
                <NavLink to={HomeRoute}  >
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to={AboutUsRoute}  >
                  ¿Quiénes somos?
                </NavLink>
              </li>
              <li>
                <NavLink to={OffersRoute}  >
                    Ofertas
                </NavLink>
              </li>
              <li>
                <NavLink to={FrequentQuestionsRoute}  >
                  Preguntas frecuentes
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <span>Formas de pago</span>
            <p>Pago seguro en línea con</p>
          </div>
          <div className="col-2">
            <span>Contáctanos</span>
            <br />
            <span>seguroya.co</span>
            <br />
            <span>3204056381</span>
            <br />
            <span> info@seguroya.co</span>
          </div>
        </div>
      </div>
    </Navbar>
  );
}
export default Footer;
