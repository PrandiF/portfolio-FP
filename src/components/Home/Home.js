import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo2 from "../../Assets/homeLogo2.png";
import Home2 from "./Home2";
import Type from "./Type";
import Particle from "../Particle";
import Particle2 from "../Particle2";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle2 />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {t("home.welcome")}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                {t("home.intro")}
                <strong className="main-name"> {t("home.name")}</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className="img-fluid">
              <img src={homeLogo2} alt="home pic" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
