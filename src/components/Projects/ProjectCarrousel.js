import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./projects.css"
import img1 from "../../Assets/Projects/TMDB/tmdb1.png"
import img2 from "../../Assets/Projects/TMDB/tmdb2.png"
import img3 from "../../Assets/Projects/TMDB/tmdb3.png"
import img4 from "../../Assets/Projects/TMDB/tmdb4.png"
import img5 from "../../Assets/Projects/TMDB/tmdb5.png"
import img6 from "../../Assets/Projects/TMDB/tmdb6.png"
import img7 from "../../Assets/Projects/TMDB/tmdb7.png"
import img8 from "../../Assets/Projects/TMDB/tmdb8.png"
import img9 from "../../Assets/Projects/TMDB/tmdb9.png"
import img10 from "../../Assets/Projects/TMDB/tmdb10.png"
import img11 from "../../Assets/Projects/TMDB/tmdb11.png"
import img12 from "../../Assets/Projects/TMDB/tmdb12.png"
import img13 from "../../Assets/Projects/TMDB/tmdb13.png"

function ProjectCarrousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="carrousel-container">
      <Carousel.Item>
        <img
          className="img-carrousel"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-carrousel"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-carrousel"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-carrousel"
          src={img4}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-carrousel"
          src={img5}
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-carrousel"
          src={img6}
          alt="Sixth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-carrousel"
          src={img7}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-carrousel"
          src={img8}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-carrousel"
          src={img9}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-carrousel"
          src={img10}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-carrousel"
          src={img11}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-carrousel"
          src={img12}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-carrousel"
          src={img13}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectCarrousel;