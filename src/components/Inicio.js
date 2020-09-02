import React from "react";
import Image from "../slider1.jpg";
import Image2 from "../slider2.jpg"
import Footer from "../components/Footer";
import "../App.css";
import { Carousel } from "react-bootstrap";

function Inicio() {
  return (
    <div className="">
      <div className="row">
        <div className="col-md-12 m-5 mr-5 p-5">
          <Carousel>
            <Carousel>
              <img
                className="d-block w-100"
                src={Image}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Image2}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Inicio;
