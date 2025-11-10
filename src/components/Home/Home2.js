import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/FranAvatar2.jpeg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Particle2 from "../Particle2";
import { useTranslation } from "react-i18next";

function Home2() {
  const { i18n, t } = useTranslation();

  return (
    <Container fluid className="home-about-section" id="home">
      <Particle2 />
      <Container className="home-content">
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>{t("home2.title")}</h1>
            <p className="home-about-body">
              {t("home2.body")}
              <br />
              <br />
              {t("home2.body2")}
              <i>
                <b className="blue"> HTML, Javascript y CSS. </b>
              </i>
              {t("home2.body3")}
              <i>
                <b className="blue"> Typescript</b>
              </i>
              {t("home2.body4")}
              <br />
              <br />
              {t("home2.body5")}
              <i>
                <b className="blue">{t("home2.body6")}</b>
                {t("home2.body7")}
                <b className="blue">{t("home2.body8")}</b>. {t("home2.body9")}
              </i>
              <br />
              <br />
              <i>
                {t("home2.body10")}
                <b className="blue">WordPress</b>{" "}
                {i18n.language === "es" ? "y " : "and "}
                <b className="blue">Elementor</b>
                {t("home2.body11")}
              </i>
              <br />
              <br />
              {t("home2.body12")}
              <b className="blue">Node.js</b> {t("home2.body13")}
              <i>
                <b className="blue">
                  {" "}
                  React {i18n.language === "es" ? "y " : "and "} Next.js
                </b>
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
            <h1>{t("home2.findMe")}</h1>
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
