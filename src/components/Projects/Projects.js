import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portadaTmdb from "../../Assets/Projects/TMDB/portadaTmdb.png";
import portadaMiTurnoWeb from "../../Assets/Projects/MiTurnoWeb/portadaMiTurnoWeb.png";
import portadaFastDelivery from "../../Assets/Projects/FastDelivery/portadaFastDelivery.png";
import portadaDonBasilio from "../../Assets/Projects/DonBasilio/portadaDonBasilio.png";
import portadaSeptemDev from "../../Assets/Projects/SeptemDev/portadaSeptemDev.png";
import portadaVirtualRisk from "../../Assets/Projects/VirtualRisk/portadaVirtualRisk.png"
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
        <h4 style={{ color: "white", position: "relative" }}>
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
              link={true}
              linkURL="https://fastdelivery.vercel.app/"
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portadaSeptemDev}
              onCourse={false}
              title="SeptemDev Studio"
              description='Este sitio web fue desarrollado para la agencia de desarrollo web "SeptemDev Studio". Es una plataforma integral que permite conocer a fondo cómo trabajan, mostrando de manera detallada los proyectos realizados para diversos clientes, junto con sus respectivas soluciones y resultados. Además, presenta al talentoso equipo de SeptemDev Studio, destacando sus habilidades y roles dentro de la agencia, y ofrece una visión clara de la metodología de trabajo empleada, desde la concepción de ideas hasta la implementación final. Este sitio web es una ventana transparente a la creatividad, experiencia y dedicación que los caracteriza.'
              ghLink="https://github.com/PrandiF/SeptemDev-Studio"
              link={true}
              linkURL="https://www.septemdevstudio.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portadaVirtualRisk}
              onCourse={true}
              title="Virtual Risk"
              description='Estoy trabajando en el desarrollo de un sitio web exclusivo para la aseguradora "Virtual Risk", encargado de todo el frontend de la web. Este sistema está diseñado específicamente para el uso interno de los empleados de la empresa. Solo el personal autorizado podrá iniciar sesión, asegurando un entorno seguro y privado para la gestión de información. El objetivo principal de este proyecto es facilitar la carga y gestión de nuevos clientes. Los empleados podrán agregar rápidamente los datos necesarios y utilizar potentes herramientas de filtrado para acceder a la información de manera rápida y eficiente. Este sistema optimizado mejorará significativamente los procesos internos, permitiendo a "Virtual Risk" ofrecer un servicio más ágil y efectivo a sus clientes.'
              ghLink="https://github.com/PrandiF/SeptemDev-Studio"
              link={false}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
}

export default Projects;
