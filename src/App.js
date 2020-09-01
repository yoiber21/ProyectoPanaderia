import React from "react";
import Navbar from "./components/Navabar";
import Inicio from "./components/Inicio";
import Empleado from "./components/Empleado";
import Venta from "./components/Venta";
import Proveedor from "./components/Proveedor";
import Producto from "./components/Producto";
import Factura from "./components/Factura";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <div className="row">
        <div className="col-md-12">
        <Navbar />
        </div>
        <Switch>
          <Route exact path="/"  component={Inicio} />
          <Route exact path="/factura" component={Factura} />
          <Route exact path="/proveedor" component={Proveedor} />
          <Route exact path="/venta" component={Venta} />
          <Route exact path="/producto" component={Producto} />
          <Route exact path="/empleado" component={Empleado} />
        </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
