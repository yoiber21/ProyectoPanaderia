import React from "react";
import Logo from "../Logo.svg";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="">
      <div className="row">
        <div className="col-md-12">
          <nav className="mb-1 navbar  navbar-expand-lg navbar-dark bg-info info-color fixed-top">
            <p class="navbar-brand">
              <img
                src={Logo}
                height="30"
                class="d-inline-block align-top"
                alt="mdb logo"
              />
              Baguette
            </p>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/factura">
                      Factura
                    </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/proveedor">
                    Proveedor
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/venta">
                    Venta
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/producto">
                    Producto
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/empleado">
                    Empleado
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
