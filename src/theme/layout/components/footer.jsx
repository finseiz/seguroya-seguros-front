import Navbar from "react-bootstrap/Navbar";
import { toAbsoluteUrl } from "../../helpers";
import { NavLink } from "react-router-dom";
import {
  AboutUsRoute,
  FrequentQuestionsRoute,
  HomeRoute,
  OffersRoute,
} from "app/routes/routes";

function Footer() {
  return (
    <Navbar className="bg-dark-blue footer">
      <div className="container-fluid mx-5 py-4 text-white">
        <div className="row m-0 w-100">
          <div className="col-4">
            <img
              className="logoFooter"
              src={toAbsoluteUrl("/media/logos/logo_seguroya_light.svg")}
              alt="logo-seguroya-light"
            />
          </div>
          <div className="col-3">
            <ul
              style={{
                color: "white",
              }}
            >
              <li>
                <NavLink style={{ color: "white" }} to={HomeRoute}>
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink style={{ color: "white" }} to={AboutUsRoute}>
                  ¿Quiénes somos?
                </NavLink>
              </li>
              <li>
                <NavLink style={{ color: "white" }} to={OffersRoute}>
                  Ofertas
                </NavLink>
              </li>
              <li>
                <NavLink style={{ color: "white" }} to={FrequentQuestionsRoute}>
                  Preguntas frecuentes
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-3 row">
            <span className="col-12">Formas de pago</span>
            <p className="col-12">Pago seguro en línea con</p>
            <div className="col-3 mr-2">
              <img
                className="logoPay"
                src={toAbsoluteUrl("/media/logos/Visa.png")}
                alt="visa"
              />
            </div>
            <div className="col-3 mr-2">
              <img
                className="logoPay"
                src={toAbsoluteUrl("/media/logos/mastercard.png")}
                alt="mastercard"
              />
            </div>
            <div className="col-3 mr-2">
              <img
                className="logoPay"
                src={toAbsoluteUrl("/media/logos/American.png")}
                alt="American"
              />
            </div>
            <div className="col-3 mr-2">
              <img
                className="logoPay2"
                src={toAbsoluteUrl("/media/logos/Diners.png")}
                alt="Diners"
              />
            </div>
            <div className="col-3">
              <img
                className="logoPay"
                src={toAbsoluteUrl("/media/logos/pse.png")}
                alt="pse"
              />
            </div>
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
