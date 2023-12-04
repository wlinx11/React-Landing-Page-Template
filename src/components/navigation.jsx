import React from "react";
import { useSpring, animated } from "@react-spring/web";

export const Navigation = (props) => {
  // Configura la animación de entrada para el menú
  const menuAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 800 },
  });

  return (
    <animated.nav
      id="menu"
      className="navbar navbar-default navbar-fixed-top"
      style={menuAnimation}
    >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Punto Pristíno
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Habitaciones
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Servicios
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Galeria
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonios
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Experencias
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </animated.nav>
  );
};
