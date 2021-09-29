import Navbar from "react-bootstrap/Navbar";
import { toAbsoluteUrl } from "../../helpers";

function Footer() {
  return (
    <Navbar className="bg-dark-blue footer">
      <div className="container-fluid mx-5 py-4 text-white">
        <div className="row m-0 w-100">
          <div className="col-5">
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
          <div className="col-2">
            <ul>
              <li>Inicio</li>
              <li>¿Quiénes somos?</li>
              <li>Ofertas</li>
              <li>Preguntas frecuentes</li>
            </ul>
          </div>
          <div className="col-3">
            <span>Formas de pago</span>
            <p>Pago seguro en línea con</p>
          </div>
          <div className="col-2">
            <span>Contáctanos</span>
            <span>seguroya.co</span>
            <span>3204056381</span>
            <span> info@seguroya.co</span>
          </div>
        </div>
      </div>
    </Navbar>
  );
}
export default Footer;
