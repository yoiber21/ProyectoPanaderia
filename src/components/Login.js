import React, { useState } from "react";
import candado from "../candado.svg";
import "../App.css";


function Login() {
  const [login, setLogin] = useState({
    email:'',
    pass:''
  });

  const HandleInputEmail=(event)=>{
    event.persist()
    setLogin((login)=>({
      ...login,
      email: event.target.value,
    }))
  };
  const [validator, setValidator] = useState(false);
  const [submit, setSubmit] = useState(false);
  const HandleInputPassword=(event)=>{
    event.persist()
    setLogin((login)=>({
      ...login,
      pass: event.target.value,
    }))
  };
  const HandleSubmit=(e)=>{
    if (login.email && login.pass) {
      setValidator(true);
    }
    setSubmit(true)
    e.preventDefault();
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center mt">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <img src={candado} alt="Candado" className="images" />
                <form onSubmit={HandleSubmit}>
                  <div className="form-group">
                    <fieldset>
                      <h3>Inicio de sesion</h3>
                    </fieldset>
                    {setSubmit && validator ?<div className="alert alert-success">Success</div> : null}
                  </div>
                  <div className="form-group">
                    <label className="App">Correo</label>
                    <input
                      type="text"
                      placeholder="Correo"
                      className="form-control"
                      name="email"
                      value={login.email}
                      onChange={HandleInputEmail}
                    />
                    {submit && !login.email ?<span className="text-danger">Ingresa tu email!</span> :null}
                  </div>
                  <div className="form-group">
                    <label className="App">Contraseña</label>
                    <input
                      type="password"
                      placeholder="Contraseña"
                      className="form-control"
                      name="pass"
                      value={login.pass}
                      onChange={HandleInputPassword}
                    />
                    {submit && !login.pass ?<span className="text-danger">Ingresa tu clave</span> :null}
                  </div>
                  <button className="btn btn-success">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
