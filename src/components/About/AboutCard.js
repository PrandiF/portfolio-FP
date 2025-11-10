import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import pdfES from "../../Assets/FrancoPrandiCV.pdf";
import pdfEN from "../../Assets/FrancoPrandiCVE.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function AboutCard() {
  const { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t("AboutMe.intro")} <span className="blue">Franco Prandi </span>
            {t("AboutMe.intro2")}{" "}
            <span className="blue"> Buenos Aires, Argentina.</span>
            <br />
            {/* Actualmente estoy en busca de trabajo, ya que recientemente finalicé
            un bootcamp y estoy listo para empezar a trabajar.
            <br /> */}
            {t("AboutMe.body")}
            <br />
            <br />
            {t("AboutMe.body2")}
            <br />
            <br />
            {t("AboutMe.body3")}
            <br />
            {t("AboutMe.body4")}
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
            {t("AboutMe.extraActivities")}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {t("AboutMe.extraActivities1")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("AboutMe.extraActivities2")}
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
