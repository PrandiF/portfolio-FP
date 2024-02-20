import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body className="card-body">
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <Card.Title>
            <strong>{props.title}</strong>
            {props.onCourse === true && (
              <Card.Text
                style={{
                  fontSize: "15px",
                }}
              >
                (En curso)
              </Card.Text>
            )}
          </Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
        </div>
        <div className="card-buttons-container">
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <BsGithub />
            GitHub
          </Button>
          {props.link ? (
            <Button
              variant="primary"
              href={props.linkURL}
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <CgWebsite /> Visitar
            </Button>
          ) : (
            ""
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
