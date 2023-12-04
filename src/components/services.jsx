import React from "react";
import { useTrail, animated } from "@react-spring/web";

export const Services = (props) => {
  const services = props.data || [];
  
  // Configura la animación para los servicios
  const trail = useTrail(services.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 800 },
  });

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Servicios</h2>
          <p>
            Nuestro hotel cuenta con los mejores servicios para vivir los mejores momentos de su vida.
          </p>
        </div>
        <div className="row">
          {trail.map((style, index) => (
            <animated.div
              key={`service-${index}`}
              className="col-md-4"
              style={style}
            >
              <i className={services[index].icon}></i>
              <div className="service-desc">
                <h3>{services[index].name}</h3>
                <p>{services[index].text}</p>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
};
