import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portadaTmdb from "../../Assets/Projects/TMDB/portadaTmdb.png";
import portadaMiTurnoWeb from "../../Assets/Projects/MiTurnoWeb/portadaMiTurnoWeb.png";
import portadaFastDelivery from "../../Assets/Projects/FastDelivery/portadaFastDelivery.png";
import portadaDonBasilio from "../../Assets/Projects/DonBasilio/portadaDonBasilio.png"
import Particle2 from "../Particle2";
import Footer from "../Footer";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle2 />
      <Container>
        
           <h1 className="title">
          Mis <strong className="blue">Proyectos </strong>
        </h1>
        <h4 style={{ color: "white", position: "relative"}}>
          Acá te dejo algunos de los proyectos en los que estuve trabajando.
        </h4>
        
       
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portadaTmdb}
              onCourse={false}
              title="The Movie Party"
              description="Sitio web que presenta una colección de películas y series de televisión, 
              cada una acompañada de información detallada y sus respectivos trailers.
              Los clientes pueden crear perfiles personalizados, lo que les permite navegar fácilmente y buscar contenidos por su nombre. 
              Además, el sitio incluye secciones en las que se muestran las películas y series de moda."
              ghLink="https://github.com/PrandiF/The_Movie_Party"
              link={false}
              carrousel="tmdb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portadaMiTurnoWeb}
              onCourse={false}
              title="Mi Turno Web App"
              description="Aplicación web que facilita la reserva de citas para empresas con sucursales físicas. El sistema
              permite gestionar el flujo de clientes en cada sede y personalizar el número de clientes simultáneos por
              sucursal y definir rangos, horarios y duración de los turnos."
              ghLink="https://github.com/javiertrombetta/p5-front-mi-turno"
              link={true}
              linkURL="https://mi-turno-web-blond.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portadaFastDelivery}
              onCourse={false}
              title="Fast Delivery App"
              description="Aplicación para una empresa de logística que tiene cientos de repartidores que al inicio del día reciben 10 paquetes cada uno y que deberán ir repartiendo a lo largo de la jornada. 
              La empresa puede monitorear la operación de repartidores, asignar o reasignar paquetes e intervenir en caso que haga falta para editar un envío.
              También tiene una parte para los repartidores donde estos podrán registrarse, loguearse libremente y seleccionar los paquetes que entregará ese día."
              ghLink="https://github.com/hernanortiz18/fast-delivery-src"
              link={false}
              carrousel="fast"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portadaDonBasilio}
              onCourse={false}
              title="Don Basilio"
              description="Sitio web diseñado para la peluquería 'Don Basilio', trabajando para la agencia de desarrollo de software 'SeptemDev Studio'. 
              Esta web permite dar una presentacion del peluquero en cuestion y mostrar los trabajos realizados a lo largo de su carrera. Como objetivo principal, la pagina permite
              agendar turnos a sus clientes para poder ir a cortarse el pelo. Estos turnos se agendan en un calendario virtual, en donde el peluquero puede tener el control de todos los 
              turnos sacados y tener una mejor organización."
              ghLink="https://github.com/LucasGlave/DonBasilioMulti"
              link={true}
              linkURL="https://don-basilio-multi.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
