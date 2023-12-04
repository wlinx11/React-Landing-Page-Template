import React from "react";
import { useSpring, animated } from "@react-spring/web";

export const About = (props) => {
  // Animación de entrada para la imagen
  const imageAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 1000 },
  });

  // Animación de entrada para el contenido de texto
  const textAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 1000 },
  });

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <animated.img
              src="img/About.jpg"
              className="img-responsive"
              alt=""
              style={imageAnimation}
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <animated.div className="about-text" style={textAnimation}>
              <h2>Nosotros</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>¿Por qué elegirnos?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
};
