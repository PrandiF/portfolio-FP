import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portadaTmdb from "../../Assets/Projects/TMDB/portadaTmdb.png";
import portadaMiTurnoWeb from "../../Assets/Projects/MiTurnoWeb/portadaMiTurnoWeb.png";
import portadaFastDelivery from "../../Assets/Projects/FastDelivery/portadaFastDelivery.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="blue">Proyectos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Acá te dejo algunos de los proyectos en los que estuve trabajando.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portadaTmdb}
              onCourse={false}
              isBlog={false}
              title="The Movie Party"
              description="Sitio web que presenta una colección de películas y series de televisión, 
              cada una acompañada de información detallada y sus respectivos trailers.
              Los clientes pueden crear perfiles personalizados, lo que les permite navegar fácilmente y buscar contenidos por su nombre. 
              Además, el sitio incluye secciones en las que se muestran las películas y series de moda."
              ghLink="https://github.com/PrandiF/The_Movie_Party"
              modal={true}
              link={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portadaMiTurnoWeb}
              onCourse={false}
              isBlog={false}
              title="Mi Turno Web App"
              description="Aplicación web que facilita la reserva de citas para empresas con sucursales físicas. El sistema
              permite gestionar el flujo de clientes en cada sede y personalizar el número de clientes simultáneos por
              sucursal y definir rangos, horarios y duración de los turnos."
              ghLink=""
              demoLink=""
              modal={false}
              link={true}
              visitarLink="https://mi-turno-web-blond.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portadaFastDelivery}
              onCourse={true}
              isBlog={false}
              title="Fast Delivery App"
              description="Aplicación para una empresa de logística que tiene cientos de repartidores que al inicio del día reciben 10 paquetes cada uno y que deberán ir repartiendo a lo largo de la jornada. 
              La empresa puede monitorear la operación de repartidores, asignar o reasignar paquetes e intervenir en caso que haga falta para editar un envío.
              También tiene una parte para los repartidores donde estos podrán registrarse, loguearse libremente y seleccionar los paquetes que entregará ese día."
              ghLink=""
              modal={false}
              link={false}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;