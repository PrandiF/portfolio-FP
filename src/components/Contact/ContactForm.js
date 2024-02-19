import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import Alert from "react-bootstrap/Alert";

function ContactForm() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_lastname: "",
    user_email: "",
    message: "",
  });
  const [mailSent, setMailSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_r3afnih", "template_bdjok4l", form.current, {
        publicKey: "9kRGZGhqg18Wok6_4",
      })
      .then(
        () => {
          console.log("Mensaje enviado!");
          setTimeout(() => {
            setMailSent(true);
            setFormData({
              user_name: "",
              user_lastname: "",
              user_email: "",
              message: "",
            });
          }, 2000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setMailSent(false);
          setFormData({
            user_name: "",
            user_lastname: "",
            user_email: "",
            message: "",
          });
        }
      );
  };
  return (
    <div>
      <form className="form-container" onSubmit={sendEmail} ref={form}>
        <div className="fullName">
          <input
            type="text"
            placeholder="Nombre"
            onChange={handleChange}
            name="user_name"
            value={formData.user_name}
          />
          <input
            type="text"
            placeholder="Nombre"
            onChange={handleChange}
            name="user_lastname"
            value={formData.user_lastname}
          />
        </div>

        <input
          type="email"
          placeholder="Mail"
          onChange={handleChange}
          name="user_email"
          value={formData.user_email}
        />
        <textarea
          placeholder="Dejame un comentario..."
          onChange={handleChange}
          name="message"
          value={formData.message}
        />
        <button type="submit" className="sendButton">
          Enviar
        </button>
        {mailSent ? (
          <Alert variant="success">Mensaje enviado con éxito</Alert>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default ContactForm;