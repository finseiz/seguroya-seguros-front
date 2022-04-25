import { actions } from "app/modules/auth/_redux/authRedux";
import { LoginRoute, RegistryRoute } from "app/routes/childs/Auth/routes";
import { UserPurchasesRoute } from "app/routes/childs/User/routes";
import {
  AboutUsRoute,
  FrequentQuestionsRoute,
  HomeRoute,
  OffersRoute,
  SarlaftRoute,
} from "app/routes/routes";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toAbsoluteUrl } from "../../helpers";

function CustomNavbar() {
  const { user, authToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const isAuthenticated = authToken !== undefined;
  const userName = user?.nombres ?? "";

  const logout = () => dispatch(actions.logout());

  return (
    <div>
      <div className="container-fluid bg-white">
        <a
          href="https://api.whatsapp.com/message/QOFDDFAB7GWIE1"
          target="_blank"
        >
          <div className="whatsapp-contact text-center">
            <img
              src={toAbsoluteUrl("/media/icons/Aceptado.png")}
              alt="wa-icon"
              className="mx-2 my-1 whatsapp-icon"
            />
            ¡Contactanos por WhatsApp!
          </div>
        </a>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          {/* Seguro Ya Brand */}
          <NavLink to="/" className="navbar-brand">
            <img src={toAbsoluteUrl("/media/logos/logo_seguroya_dark.svg")} />{" "}
          </NavLink>

          {/* Toggle Buttoms */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Items */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="mr-auto">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to={HomeRoute}
                    className="nav-link"
                    activeClassName="active"
                  >
                    Inicio
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to={AboutUsRoute}
                    className="nav-link"
                    activeClassName="active"
                  >
                    ¿Quiénes somos?
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to={OffersRoute}
                    className="nav-link"
                    activeClassName="active"
                  >
                    Ofertas
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to={FrequentQuestionsRoute}
                    className="nav-link"
                    activeClassName="active"
                  >
                    Preguntas frecuentes
                  </NavLink>
                </li>

                {isAuthenticated && (
                  <li className="nav-item">
                    <NavLink
                      to={UserPurchasesRoute}
                      className="nav-link"
                      activeClassName="active"
                    >
                      Mi biblioteca
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>

            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {isAuthenticated ? (
                  <div>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle dropdown"
                        type="button"
                        id="userSessionDropD"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src={toAbsoluteUrl(`/media/icons/persona.svg`)}
                          className="dropdown__icon"
                        />
                        ¡Bienvenid@, {userName}!
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="userSessionDropD"
                      >
                        <li>
                          <NavLink
                            to={SarlaftRoute}
                            className="nav-link"
                            activeClassName="active"
                          >
                            <span className="dropdown-item">
                              {" "}
                              Llenar Sarlaf
                            </span>
                          </NavLink>
                        </li>
                        <li>
                          <span
                            className="dropdown-item"
                            onClick={() => logout()}
                          >
                            Cerrar sesión
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <>
                    <li className="nav-item">
                      <NavLink
                        to={LoginRoute}
                        className="nav-link"
                        activeClassName="active"
                      >
                        <div className="btn btn-secondary secondary-button">
                          {" "}
                          Iniciar Sesión{" "}
                        </div>
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        to={RegistryRoute}
                        className="nav-link"
                        activeClassName="active"
                      >
                        <div className="btn btn-secondary primary-button">
                          {" "}
                          Registrarse{" "}
                        </div>
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default CustomNavbar;
