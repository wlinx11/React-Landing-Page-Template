import React from "react";
import { useTrail, animated } from "@react-spring/web";

export const Testimonials = (props) => {
  const testimonials = props.data || [];

  // Configura la animación para los testimonios
  const trail = useTrail(testimonials.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 800 },
  });

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Lo que nuestros clientes dicen</h2>
        </div>
        <div className="row">
          {trail.map((style, index) => (
            <animated.div
              key={`testimonial-${index}`}
              className="col-md-4"
              style={style}
            >
              <div className="testimonial">
                <div className="testimonial-image">
                  {" "}
                  <img src={testimonials[index].img} alt="" />{" "}
                </div>
                <div className="testimonial-content">
                  <p>"{testimonials[index].text}"</p>
                  <div className="testimonial-meta"> - {testimonials[index].name} </div>
                </div>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
};
