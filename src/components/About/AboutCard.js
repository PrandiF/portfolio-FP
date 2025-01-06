import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import pdfES from "../../Assets/CVFrancoPrandiES.pdf";
import pdfEN from "../../Assets/CVFrancoPrandiEN.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Button } from "react-bootstrap";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Me llamo <span className="blue">Franco Prandi </span>y soy de{" "}
            <span className="blue"> Buenos Aires, Argentina.</span>
            <br />
            {/* Actualmente estoy en busca de trabajo, ya que recientemente finalicé
            un bootcamp y estoy listo para empezar a trabajar.
            <br /> */}
            Soy desarrollador full-stack especializado en frontend, con
            experiencia en lenguajes como JavaScript, TypeScript, CSS y HTML. He
            desarrollado sitios web completos utilizando React y Next.js,
            aplicando estilos con CSS y frameworks de CSS utilitarios como
            Tailwind.
            <br />
            <br />
            Además, cuento con experiencia en WordPress y Elementor, lo que me
            permite crear, personalizar y optimizar sitios web dinámicos y
            atractivos, adaptados a las necesidades específicas de cada
            proyecto.
            <br />
            <br />
            Mi objetivo es aportar mi creatividad, dedicación y conocimientos a
            los equipos de IT.
            <br />
            Siempre estoy dispuesto a ofrecer ayuda e igualmente abierto al
            aprendizaje, con el objetivo de un crecimiento profesional continuo.
            <br />
            <br />
            <div className="descargarCV-button-container">
              <Button
                variant="primary"
                href={pdfES}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Descargar CV en Español
              </Button>
              <Button
                variant="primary"
                href={pdfEN}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download CV in English
              </Button>
            </div>
            <br />
            Además de codear, hago otras cosas!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugador de basquet profesional
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar por el mundo
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Jugar videojuegos
            </li> */}
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
