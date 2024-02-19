import React from "react";
import "./contact.css";
import ContactForm from "./ContactForm";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import contactImg from "../../Assets/contact1.png"


function Contact() {
  return (
    <Container fluid className="about-section contact-container">
      <Particle />
      <h2 className="title">Contactame 🚀</h2>
      <Container style={{display: "flex", width: "100%", justifyContent: "space-around", alignItems: "center"}}>
        <img
          src={contactImg}
          alt="contact pic"
          className="img-fluid contact-img"
        />
        <ContactForm />
      </Container>
    </Container>
  );
}

export default Contact;