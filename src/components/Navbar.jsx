import React from 'react';

export default function Navbar() {
  return (
    <nav style={navStyle}>
      {/* Logotipo */}
      <div style={logoStyle}>
        CATER-KOM <span style={{ color: '#000000', fontWeight: '500' }}>INTERNACIONAL</span>
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

// --- ESTILOS (Objetos de JavaScript) ---WSSS

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  width: '100%',
  padding: '20px 5%', // <-- Centralizamos el padding aquí para que todo esté alineado
  boxSizing: 'border-box',
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#128FCC',
  letterSpacing: '1px',
  // Quitamos el padding de aquí para que no descuadre el flex
};

const ulStyle = {
  display: 'flex',
  listStyle: 'none',
  gap: '60px', // <-- Aumentado de 30px a 60px para que haya mucho más espacio
  alignItems: 'center',
  margin: 0,
  padding: 0,
};

const linkStyle = {
  textDecoration: 'none',
  color: '#128FCC',
  fontWeight: '500',
  fontSize: '1.1rem',
  transition: '0.3s',
};

const contactBtnStyle = {
  textDecoration: 'none',
  backgroundColor: '#128FCC',
  color: 'white',
  padding: '12px 28px', // <-- Botón un poco más grande y estilizado
  borderRadius: '8px',  // Un poco más de redondeado para look moderno
  fontSize: '1.1rem',
  fontWeight: 'bold',
  transition: 'all 0.3s ease',
  display: 'inline-block',
};