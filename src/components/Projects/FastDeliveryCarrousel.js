import React, { useState } from 'react'
import Carousel from "react-bootstrap/Carousel";
import "./fastDelivery.css"
import img1 from "../../Assets/Projects/FastDelivery/fastDelivery1.png"
import img2 from "../../Assets/Projects/FastDelivery/fastDelivery2.png"
import img3 from "../../Assets/Projects/FastDelivery/fastDelivery3.png"
import img4 from "../../Assets/Projects/FastDelivery/fastDelivery4.png"
import img5 from "../../Assets/Projects/FastDelivery/fastDelivery5.png"
import img6 from "../../Assets/Projects/FastDelivery/fastDelivery6.png"
import img7 from "../../Assets/Projects/FastDelivery/fastDelivery7.png"
import img8 from "../../Assets/Projects/FastDelivery/fastDelivery8.png"
import img9 from "../../Assets/Projects/FastDelivery/fastDelivery9.png"
import img10 from "../../Assets/Projects/FastDelivery/fastDelivery10.png"
import img11 from "../../Assets/Projects/FastDelivery/fastDelivery11.png"


function FastDeliveryCarrousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="carrousel-container">
      <Carousel.Item>
        <img
          className="img-fast-carrousel"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fast-carrousel"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fast-carrousel"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fast-carrousel"
          src={img4}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fast-carrousel"
          src={img5}
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fast-carrousel"
          src={img6}
          alt="Sixth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fast-carrousel"
          src={img7}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fast-carrousel"
          src={img8}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fast-carrousel"
          src={img9}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fast-carrousel"
          src={img10}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fast-carrousel"
          src={img11}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
  
}

export default FastDeliveryCarrousel