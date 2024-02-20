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

function About() {
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
            <h1 className="title">Conoceme un poco más</h1>
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
          Stack <strong className="blue">Tecnológico </strong>
        </h1>
        <Techstack />
        <h1 className="title">
          Stack de <strong className="blue">herramientas</strong>
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
