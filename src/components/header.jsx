import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Header = (props) => {
  return (
    <header id="header">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000} // Intervalo entre diapositivas en milisegundos
      >
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <img
                    src={process.env.PUBLIC_URL + "/img/LogoBlanco.png"}
                    alt="Logo"
                    style={{
                      flexDirection: "column",
                      height: "40vh",
                      width: "40vh",
                    }}
                  />
                  <h1>
                    {props.data ? props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : "Loading"}</p>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    ¡Reserva ahora!
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Repite la misma diapositiva 4 veces */}
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <img
                    src={process.env.PUBLIC_URL + "/img/LogoBlanco.png"}
                    alt="Logo"
                    style={{
                      flexDirection: "column",
                      height: "40vh",
                      width: "40vh",
                    }}
                  />
                  <h1>
                    {props.data ? props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : "Loading"}</p>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    ¡Reserva ahora!
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Repite la misma diapositiva 2 veces más */}
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <img
                    src={process.env.PUBLIC_URL + "/img/LogoBlanco.png"}
                    alt="Logo"
                    style={{
                      flexDirection: "column",
                      height: "40vh",
                      width: "40vh",
                    }}
                  />
                  <h1>
                    {props.data ? props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : "Loading"}</p>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    ¡Reserva ahora!
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </header>
  );
};
