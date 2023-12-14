import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeaderComponent() {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("isAuth") === "true";
  const logout = () => {
    localStorage.setItem("isAuth", false);
    navigate("/admin/login");
  };

  const paginaMedia = () => {
    navigate("/admin/paginamedia");
  };

  return (
    <div className="d-flex justify-content-between m-4 mb-5">
      <div className="col col-4" style={{ marginLeft: "20px" }}>
        <h2>PEZLAB</h2>
      </div>  
      
      {isAuth ? (
        <div>
        <button className="btn btn-success" onClick={paginaMedia}>
        Administrador
      </button>
        <button className="btn btn-danger" style={{ marginLeft: "20px" }} onClick={logout}>
          Salir
        </button>
        </div>
        ) : null}
      
    </div>
  );
}
