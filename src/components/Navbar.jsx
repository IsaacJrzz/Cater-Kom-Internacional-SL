import React from 'react';
import '../index.css'; // Asegúrate de importar el CSS aquí

export default function Navbar() {
  return (
    <nav className="navbar-container">
      {/* Logotipo */}
      <div className="nav-logo">
        CATER-KOM <span>INTERNACIONAL</span>
      </div>

      {/* Enlaces de Navegación */}
      <ul className="nav-list">
        <li><a href="#inicio" className="nav-link">Inicio</a></li>
        <li><a href="#servicios" className="nav-link">Servicios</a></li>
        <li><a href="#nosotros" className="nav-link">Nosotros</a></li>
        <li>
          <a href="#contacto" className="nav-btn-contact">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}