import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiScrum } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiScrum />
      </Col>
     
    </Row>
  );
}

export default Toolstack;