import React from 'react';

export default function Navbar() {
  return (
    <nav style={navStyle}>
      {/* Logotipo */}
      <div style={logoStyle}>
        CATER-KOM <span style={{ color: '#ff0000', fontWeight: '500' }}>INTERNACIONAL</span>
      </div>

      {/* Enlaces de Navegación */}
      <ul style={ulStyle}>
        <li><a href="#inicio" style={linkStyle}>Inicio</a></li>
        <li><a href="#servicios" style={linkStyle}>Servicios</a></li>
        <li><a href="#nosotros" style={linkStyle}>Nosotros</a></li>
        <li>
          <a href="#contacto" style={contactBtnStyle}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}

// --- ESTILOS (Objetos de JavaScript) ---

// src/components/Navbar.jsx
const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 5%', // El 5% es padding interno, no margen externo
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  width: '100%', // <--- Asegúrate de que esta línea esté aquí
};

const logoStyle = {
  fontSize: '1.4rem',
  fontWeight: 'bold',
  color: '#1a365d', // Azul oscuro corporativo
  letterSpacing: '1px',
};

const ulStyle = {
  display: 'flex',
  listStyle: 'none',
  gap: '30px',
  alignItems: 'center',
  margin: 0,
};

const linkStyle = {
  textDecoration: 'none',
  color: '#4a5568',
  fontWeight: '500',
  fontSize: '0.95rem',
  transition: '0.3s',
};

const contactBtnStyle = {
  textDecoration: 'none',
  backgroundColor: '#1a365d',
  color: 'white',
  padding: '8px 20px',
  borderRadius: '5px',
  fontSize: '0.9rem',
  fontWeight: 'bold',
  transition: 'background-color 0.3s',
};