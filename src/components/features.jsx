import React from "react";
import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";

export const Features = (props) => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Habitaciones</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <animated.div
                  key={`${d.title}-${i}`}
                  className="col-xs-6 col-md-3"
                  style={animationProps}
                >
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </animated.div>
              ))
            : "Loading..."}

        </div>
      </div>
    </div>
  );
};
