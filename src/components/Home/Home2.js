import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/FranAvatar2.jpeg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Particle2 from "../Particle2";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="home">
      <Particle2 />
      <Container className="home-content">
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>ME PRESENTO...</h1>
            <p className="home-about-body">
              Me enamoré de la programación y creo que al menos he aprendido
              algo, ¡creo...! 🤷‍♂️
              <br />
              <br />
              Domino clásicos como
              <i>
                <b className="blue"> HTML, Javascript y CSS. </b>
              </i>
              y también tengo experiencia con
              <i>
                <b className="blue"> Typescript</b>
              </i>
              , lo que me permite escribir código más seguro y escalable.
              <br />
              <br />
              Mi campo de interés principal es la construcción de nuevas &nbsp;
              <i>
                <b className="blue">aplicaciones</b>, con un enfoque
                especialmente orientado hacia el{" "}
                <b className="blue">desarrollo frontend</b>. Me apasiona crear
                experiencias de usuario cautivadoras y funcionales.
              </i>
              <br />
              <br />
              <i>
                Además, tengo experiencia trabajando con{" "}
                <b className="blue">WordPress</b> y{" "}
                <b className="blue">Elementor</b>, lo que me permite desarrollar
                y personalizar sitios web dinámicos y atractivos, optimizando
                tanto su diseño como su rendimiento.
              </i>
              <br />
              <br />
              Siempre que sea posible, aplico mi pasión por desarrollar
              productos con <b className="blue">Node.js</b> y las últimas
              bibliotecas y frameworks de JavaScript como
              <i>
                <b className="blue"> React y Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-avatar" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Me podes encontrar en...</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/PrandiF"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/franco-prandi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/francoprandi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
