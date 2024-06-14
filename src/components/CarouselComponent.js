import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../App.css'; // ou './App.css' se você colocou lá

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="MicrosoftTeams-image (3).jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h4>Projeto Química Orgânica</h4>
            <p>Interdisciplina DEV Senai e Química</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="imgqui.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
          <h4>Projeto Química Orgânica</h4>
          <p>Interdisciplina DEV Senai e Química</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="imagem2qui.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
          <h4>Projeto Química Orgânica</h4>
          <p>Interdisciplina DEV Senai e Química</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
