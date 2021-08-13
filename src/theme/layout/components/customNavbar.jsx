import { LoginRoute, RegistryRoute } from "app/routes/childs/Auth/routes";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { toAbsoluteUrl } from "../../helpers";

function CustomNavbar() {

  const history = useHistory();

  return (
    <Navbar
      bg="white"
      variant="light"
      className="header navbar-default navbar-fixed-top fixed-top"
    >
      <Navbar.Brand href="/home">
        <img
          className="logo"
          src={toAbsoluteUrl("/media/logos/logo_seguroya_dark.svg")}
        />{" "}
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/home">Inicio</Nav.Link>
        <Nav.Link href="/home">¿Quiénes somos?</Nav.Link>
        <Nav.Link href="/home">Ofertas</Nav.Link>
        <Nav.Link href="/home">Preguntas Frecuentes</Nav.Link>
      </Nav>
      <button 
        className="btn btn-secondary secondary-button"
        onClick={ () => history.push(LoginRoute) }
      >
        Iniciar Sesión
      </button>
      <button 
        className="btn btn-primary primary-button ml-2"
        onClick={ () => history.push(RegistryRoute) }
      >
        Registrarse
      </button>
    </Navbar>
  );
}

export default CustomNavbar;
