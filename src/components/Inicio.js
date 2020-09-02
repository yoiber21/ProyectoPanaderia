import React from "react";
import Image from "../images/model3.jpg"
import Footer from "../components/Footer";
import "../Css/Inicio.css";
import { Carousel } from "react-bootstrap";

function Inicio() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 p-5">
        <section>
          <img 
          src={Image}
          fluid
          className="Image"
           fluid/>
        </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Inicio;
