import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import aboutLogo from "../../Assets/aboutLogo.png";
import Toolstack from "./Toolstack";
import Github from "./Github";
import Particle2 from "../Particle2";
import Footer from "../Footer";
import { useTranslation } from "react-i18next";

function About() {
  const { i18n, t } = useTranslation();

  return (
    <Container fluid className="about-section">
      <Particle2 />
      <Container>
        <Row
          style={{
            justifyContent: "center",
            padding: "10px",
          }}
          className="know-me-container"
        >
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="title">{t("AboutMe.title")}</h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={aboutLogo} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="title">
          {i18n.language === "en" && (
            <strong className="blue">{t("AboutMe.technologies")} </strong>
          )}
          Stack
          {i18n.language === "es" && (
            <strong className="blue">{t("AboutMe.technologies")} </strong>
          )}
        </h1>
        <Techstack />
        <h1 className="title">
          {i18n.language === "en" && (
            <strong className="blue">{t("AboutMe.tools")} </strong>
          )}
          Stack
          {i18n.language === "es" && (
            <strong className="blue">{t("AboutMe.tools")} </strong>
          )}
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
      <Footer />
    </Container>
  );
}

export default About;
