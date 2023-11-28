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
      <div className="container_navbar">
        <div className="container_navbar--logo">
            <img src={ logo } alt="Logo" />
            <p>Lorem Ipsum</p>
        </div>
        <div className={`container_navbar--links ${menu ? 'open' : ''}`}>
            <button onClick={toggleMenu} ></button>
            <ul className={`nav-list ${menu ? 'show' : ''}`}>
                <li className="nav-link">Inicio</li>
                <li className="nav-link active">Productos</li>
                <li className="nav-link">Contacto</li>
            </ul>
        </div>
      </div>
    );
  };

export default Navbar
