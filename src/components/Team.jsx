import React from "react";
import { useTrail, animated } from "@react-spring/web";
import AdministrarHabitaciones from "./AdministrarHabitacion";

export const Team = (props) => {
  const touristSpots = props.data || [];

  // Configura la animación para los puntos turísticos
  const trail = useTrail(touristSpots.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 800 },
  });

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Puntos Turisticos</h2>
          <p>
            Descubre los puntos turísticos más emblemáticos que rodean nuestro hotel y sumérgete en la riqueza cultural de la región.
          </p>
        </div>
        <div className="row">
          {trail.map((style, index) => (
            <animated.div
              key={`tourist-spot-${index}`}
              className="col-md-3 col-sm-6 team"
              style={style}
            >
              <div className="thumbnail">
                <img src={touristSpots[index].img} alt="..." className="team-img" />
                <div className="caption">
                  <h4>{touristSpots[index].name}</h4>
                  <p>{touristSpots[index].job}</p>
                </div>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
      </div>
  );
};
