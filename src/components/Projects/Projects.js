import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import portadaSeptemDev from "../../Assets/Projects/SeptemDev/portadaSeptemDev.png";
import portadaVirtualRisk from "../../Assets/Projects/VirtualRisk/portadaVirtualRisk.png";
import portadaGevp from "../../Assets/Projects/GEVP/portadaGevp.png";
import portadaPadelGevp from "../../Assets/Projects/PadelGEVP/portadaPadelGEVP.png";
import portadaInquimex from "../../Assets/Projects/Inquimex/portadaInquimex.png";
import portadaLosAlmendros from "../../Assets/Projects/LosAlmendros/portadaLosAlmendros.png";
import portadaGearLab from "../../Assets/Projects/GearLab/portadaGearLab.png";
import SAIPortada from "../../Assets/Projects/SAI/SAIPortada.png";
import SiaacomPortada from "../../Assets/Projects/Siaacom/SiaacomPortada.png";
import Particle2 from "../Particle2";
import Footer from "../Footer";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <Container fluid className="project-section">
      <Particle2 />
      <Container>
        <h1 className="title">
          {t("Projects.title")}
          <strong className="blue"> {t("Projects.title2")} </strong>
        </h1>
        <h4 style={{ color: "white", position: "relative" }}>
          {t("Projects.description")}
        </h4>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portadaSeptemDev}
              onCourse={false}
              title={t("Projects.Septemdev.title")}
              description={t("Projects.Septemdev.description")}
              ghLink="https://github.com/PrandiF/SeptemDev-Studio"
              link={true}
              linkURL="https://www.septemdevstudio.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portadaVirtualRisk}
              onCourse={false}
              title={t("Projects.VirtualRisk.title")}
              description={t("Projects.VirtualRisk.description")}
              ghLink="https://github.com/PrandiF/SeptemDev-Studio"
              link={true}
              linkURL="https://virtual-risk-front.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portadaGevp}
              onCourse={false}
              title={t("Projects.GEVPApp.title")}
              description={t("Projects.GEVPApp.description")}
              ghLink="https://github.com/PrandiF/gevp-front"
              link={true}
              linkURL="https://app.clubgevp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portadaInquimex}
              onCourse={false}
              title={t("Projects.Inquimex.title")}
              description={t("Projects.Inquimex.description")}
              ghLink=""
              link={true}
              linkURL="https://inquimex.com.ar/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portadaPadelGevp}
              onCourse={false}
              title={t("Projects.PadelGevp.title")}
              description={t("Projects.PadelGevp.description")}
              ghLink=""
              link={true}
              linkURL="https://padelgevp.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portadaLosAlmendros}
              onCourse={false}
              title={t("Projects.LosAlmendros.title")}
              description={t("Projects.LosAlmendros.description")}
              ghLink=""
              link={true}
              linkURL="https://losalmendrosquinchos.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portadaGearLab}
              onCourse={false}
              title={t("Projects.GearLab.title")}
              description={t("Projects.GearLab.description")}
              ghLink=""
              link={true}
              linkURL="https://gearlab.com.ar/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SAIPortada}
              onCourse={true}
              title={t("Projects.SAI.title")}
              description={t("Projects.SAI.description")}
              ghLink="https://github.com/LucasGlave/SAI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SiaacomPortada}
              onCourse={true}
              title={t("Projects.Siaacom.title")}
              description={t("Projects.Siaacom.description")}
              ghLink="https://github.com/LucasGlave/SIAACOM"
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
}

export default Projects;
