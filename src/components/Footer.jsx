import React from 'react';
import '../index.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* BLOQUE DE MARCA */}
        <div className="footer-brand">
          <div className="footer-logo-wrapper">
            <img src="./logo.png" alt="Cater-Kom" className="footer-logo-img" />
          </div>
          <p className="footer-description">
            Cater-Kom Internacional S.L. — Especialistas en suministros industriales y soluciones logísticas integrales para el sector profesional.
          </p>
        </div>

        {/* NAVEGACIÓN */}
        <div className="footer-nav-col">
          <h4 className="footer-heading">Empresa</h4>
          <ul className="footer-list">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Catálogo de Suministros</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        {/* DATOS REALES COSLADA */}
        <div className="footer-nav-col">
          <h4 className="footer-heading">Ubicación</h4>
          <p className="footer-contact-info">
            Coslada, Madrid<br />
            Polígono Industrial — España
          </p>
          <p className="footer-contact-info">
            <strong>T:</strong> +34 910 00 00 00
          </p>
        </div>

        {/* HORARIO INDUSTRIAL */}
        <div className="footer-nav-col">
          <h4 className="footer-heading">Atención</h4>
          <p className="footer-contact-info">Lun - Vie: 08:00 - 18:00</p>
          <p className="footer-contact-info">info@cater-kom.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-divider"></div>
        <div className="footer-bottom-content">
          <p>© 2026 CATER-KOM INTERNACIONAL S.L. | Suministros Industriales</p>
          <div className="footer-legal-links">
            <a href="#">Aviso Legal</a>
            <a href="#">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}