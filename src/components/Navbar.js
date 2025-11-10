import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineMail,
} from "react-icons/ai";
// import { CgFileDocument } from "react-icons/cg";
import flagUS from "../Assets/usaFlag.jpg";
import flagAR from "../Assets/argFlag.jpg";
import { useTranslation } from "react-i18next";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { i18n, t } = useTranslation();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container className="nav-container">
        <Navbar.Brand href="/">
          <p className="p-logo-navbar">Fp.</p>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} />
                {t("navbar.home")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} />
                {t("navbar.about")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />
                {t("navbar.projects")}
              </Nav.Link>
            </Nav.Item>
            {/* 
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Mi CV
              </Nav.Link>
            </Nav.Item> */}

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineMail style={{ marginBottom: "2px" }} />
                {t("navbar.contact")}
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item className="d-flex align-items-center ms-3">
              <img
                src={flagAR}
                alt="Español"
                title="Español"
                onClick={() => changeLanguage("es")}
                style={{
                  width: "28px",
                  height: "18px",
                  cursor: "pointer",
                  marginRight: "8px",
                  opacity: i18n.language === "es" ? 1 : 0.5,
                  transition: "opacity 0.3s",
                }}
              />
              <img
                src={flagUS}
                alt="Inglés"
                title="Inglés"
                onClick={() => changeLanguage("en")}
                style={{
                  width: "28px",
                  height: "18px",
                  cursor: "pointer",
                  opacity: i18n.language === "en" ? 1 : 0.5,
                  transition: "opacity 0.3s",
                }}
              />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
