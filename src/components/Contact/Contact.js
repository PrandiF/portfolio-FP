import React from "react";
import "./contact.css";
import ContactForm from "./ContactForm";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import contactImg from "../../Assets/contact1.png";
import Particle2 from "../Particle2";
import Footer from "../Footer";

function Contact() {
  return (
    <Container fluid className="contact-container">
      <Particle2 />
      <h2 className="title">Contactame 🚀</h2>
      <Container
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
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
