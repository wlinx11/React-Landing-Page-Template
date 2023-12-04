import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [formState, setFormState] = useState(initialState);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearForm = () => {
    setFormState(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          clearForm();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // Animación de entrada para el formulario
  const formAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 800 },
  });

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <animated.div
                className="section-title"
                style={formAnimation}
              >
                <h2>Ponte en contacto con nosotros</h2>
                <p>
                  Estamos aquí para escucharte y atender tus necesidades. ¡Contáctanos y déjanos hacer de tu estadía una experiencia excepcional!
                </p>
              </animated.div>
              <form
                name="sentMessage"
                validate
                onSubmit={handleSubmit}
                style={formAnimation}
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nombre"
                        required
                        value={formState.name}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Correo"
                        required
                        value={formState.email}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Mensaje"
                    required
                    value={formState.message}
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button
                  type="submit"
                  className="btn btn-custom btn-lg"
                  disabled={isSent}
                >
                  {isSent ? "Mensaje Enviado" : "Enviar Mensaje"}
                </button>
              </form>
            </div>
          </div>
          <animated.div className="col-md-3 col-md-offset-1 contact-info" style={formAnimation}>
            <div className="contact-item">
              <h3>Información de Contacto</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Ubicaciones
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Celular
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Correo
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </animated.div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Hotel Punto Pristíno ~ Desarrollo por {" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              Imagine Codes
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};