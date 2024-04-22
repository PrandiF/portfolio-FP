import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IoIosAlbums } from "react-icons/io";
import ProjectCarrousel from "./ProjectCarrousel";
import "./fastDelivery.css";
import FastDeliveryCarrousel from "./FastDeliveryCarrousel";

function FastDeliveryModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <IoIosAlbums /> Demo
      </Button>
      <Modal show={show} onHide={handleClose} className="custom-fast-modal">
        <Modal.Header closeButton />
        <Modal.Body className="fast-modal-body">
          <FastDeliveryCarrousel />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FastDeliveryModal;
