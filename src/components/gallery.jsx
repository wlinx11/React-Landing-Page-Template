import React from "react";
import { useTrail, animated } from "@react-spring/web";
import { Image } from "./image";

export const Gallery = (props) => {
  const images = props.data || [];

  // Configura la animación para las imágenes
  const trail = useTrail(images.length, {
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 800 },
  });

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Galeria</h2>
          <p>
            Explora nuestra galería y descubre la belleza que te espera en cada rincón de nuestro hotel de lujo.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {trail.map((style, index) => (
              <animated.div
                key={`image-${index}`}
                className="col-sm-6 col-md-4 col-lg-4"
                style={style}
              >
                <Image
                  title={images[index].title}
                  largeImage={images[index].largeImage}
                  smallImage={images[index].smallImage}
                />
              </animated.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
