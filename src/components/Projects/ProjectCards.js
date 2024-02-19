import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import ProjectModal from "./Modal";

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
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "10px",
          }}
        >
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {props.modal ? (<ProjectModal />) : ""}
          {props.link ? (<Button variant="primary" href={props.visitarLink} target="_blank">visitar</Button>) : ""}
        </div>

        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;