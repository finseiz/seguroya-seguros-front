import { LoginRoute, RegistryRoute } from "app/routes/childs/Auth/routes";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { toAbsoluteUrl } from "../../helpers";

function CustomNavbar() {

  const history = useHistory();

  return (
    <div>

      <div className="container-fluid">
        <div className="whatsapp-contact text-center">

          <img
              src={toAbsoluteUrl("/media/icons/whatsapp.png")}
              alt="wa-icon"
              className="mx-2 my-1 whatsapp-icon"
          />
          ¡Contactanos por WhatsApp +57 340 5689!
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-white">

        <div className="container-fluid">

          {/* Seguro Ya Brand */}
          <NavLink to="/" className="navbar-brand">
            <img
              src={toAbsoluteUrl("/media/logos/logo_seguroya_dark.svg")}
            />{" "}
          </NavLink>

          {/* Toggle Buttoms */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Items */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="mr-auto">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <NavLink to="/home" className="nav-link" activeClassName="active" >
                    Inicio
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/about-us" className="nav-link" activeClassName="active" >
                    ¿Quiénes somos?
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/offers" className="nav-link" activeClassName="active" >
                    Ofertas
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/questions" className="nav-link" activeClassName="active" >
                    Preguntas
                  </NavLink>
                </li>
              </ul>

            </div>

            <div>

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <NavLink to={LoginRoute} className="nav-link" activeClassName="active" >
                    <div className="btn btn-secondary secondary-button"> Iniciar Sesión </div>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to={RegistryRoute} className="nav-link" activeClassName="active" >
                    <div className="btn btn-secondary primary-button"> Registarse </div>
                  </NavLink>
                </li>


              </ul>

            </div>

          </div>



        </div>
      </nav>

    </div>
  )

  // return (
  //   <Navbar
  //     bg="white"
  //     variant="light"
  //     className="header navbar-default navbar-fixed-top fixed-top"
  //   >
  //     <Navbar.Brand to="/home">
  //       <img
  //         src={toAbsoluteUrl("/media/logos/logo_seguroya_dark.svg")}
  //       />{" "}
  //     </Navbar.Brand>
  //     <Nav className="mr-auto">
  //       <Nav.Link>Inicio</Nav.Link>
  //       <Nav.Link>¿Quiénes somos?</Nav.Link>
  //       <Nav.Link>Ofertas</Nav.Link>
  //       <Nav.Link>Preguntas Frecuentes</Nav.Link>
  //     </Nav>
  //     <button 
  //       className="btn btn-secondary secondary-button"
  //       onClick={ () => history.push(LoginRoute) }
  //     >
  //       Iniciar Sesión
  //     </button>
  //     <button 
  //       className="btn btn-primary primary-button ml-2"
  //       onClick={ () => history.push(RegistryRoute) }
  //     >
  //       Registrarse
  //     </button>
  //   </Navbar>
  // );
}

export default CustomNavbar;
