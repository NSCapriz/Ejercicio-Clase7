import React from "react";
import { useState } from "react";
import logo from "../../assets/img/descarga.jpg"
import '../../assets/css/navbar.css'

const Navbar = () => {
    const [menu, setMenu] = useState(false);
  
    const toggleMenu = () => {
      setMenu(!menu);
    };
  
    return (
      <div className="container-fluid container_navbar">
        <div className="container_navbar--logo">
            <img src={ logo } alt="Logo" />
            <p>Lorem Ipsum</p>
        </div>
        <div className={`container_navbar--links container-fluid ${menu ? 'open' : ''}`}>
            <button onClick={toggleMenu} className="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
            </button>
            <ul className={`nav-list ${menu ? 'show' : ''}`}>
                <li ><a href="#" aria-disabled="true" className="nav-link">Inicio</a></li>
                <li ><a href="#" className="nav-link active fw-bolder "> Productos</a></li>
                <li ><a href="#" aria-disabled="true" className="nav-link">Contacto</a></li>
            </ul>
        </div>
      </div>
    );
  };

export default Navbar
