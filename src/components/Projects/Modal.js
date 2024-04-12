import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IoIosAlbums } from "react-icons/io";
import ProjectCarrousel from "./ProjectCarrousel";
import "./projects.css";

function ProjectModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <IoIosAlbums /> Demo
      </Button>
      <Modal show={show} onHide={handleClose} className="custom-modal">
        <Modal.Header closeButton />
        <Modal.Body className="modal-body">
          <ProjectCarrousel />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectModal;