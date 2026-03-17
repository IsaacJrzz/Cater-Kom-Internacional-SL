import React, { useState } from 'react';

// Sub-componente para los enlaces normales con transición suave
const NavLink = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const linkStyle = {
    textDecoration: 'none',
    color: isHovered ? '#d69e2e' : '#128FCC', 
    fontWeight: '600',
    fontSize: '1.1rem',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)', 
    padding: '0 10px',
    display: 'inline-block'
  };

  return (
    <a
      href={href}
      style={linkStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </a>
  );
};

export default function Navbar() {
  const [btnHover, setBtnHover] = useState(false);

  return (
    <nav style={navStyle}>
      {/* Logotipo */}
      <div style={logoStyle}>
        CATER-KOM <span style={{ color: '#000000', fontWeight: '500' }}>INTERNACIONAL</span>
      </div>

      {/* Enlaces de Navegación */}
      <ul style={ulStyle}>
        <li><NavLink href="#inicio">Inicio</NavLink></li>
        <li><NavLink href="#servicios">Servicios</NavLink></li>
        <li><NavLink href="#nosotros">Nosotros</NavLink></li>
        <li>
          <a 
            href="#contacto" 
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            style={{
              ...contactBtnStyle,
              backgroundColor: btnHover ? '#d69e2e' : '#128FCC',
              boxShadow: btnHover ? '0 5px 15px rgba(0,0,0,0.2)' : 'none',
            }}
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}

// --- ESTILOS ---

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
  padding: '20px 5%',
  boxSizing: 'border-box',
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#128FCC',
  letterSpacing: '1px',
};

const ulStyle = {
  display: 'flex',
  listStyle: 'none',
  gap: '60px',
  alignItems: 'center',
  margin: 0,
  padding: 0,
};

const contactBtnStyle = {
  textDecoration: 'none',
  color: 'white',
  padding: '12px 28px',
  borderRadius: '8px',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  display: 'inline-block',
  // Transición suave para el color de fondo, la sombra y el movimiento
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', 
};