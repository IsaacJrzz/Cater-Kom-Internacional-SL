import React from 'react';

export default function Footer() {
  return (
    <footer id="footer" style={{
      minHeight: '40vh',
      backgroundColor: '#0d1b2a',
      color: '#cbd5e0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '60px 5%',
      borderTop: '4px solid #d69e2e'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '1100px', flexWrap: 'wrap', gap: '40px' }}>
        <div>
          <h3 style={{ color: 'white', marginBottom: '15px' }}>CATER-KOM</h3>
          <p style={{ fontSize: '0.9rem', maxWidth: '250px' }}>Conectando empresas con el mercado global.</p>
        </div>
        <div>
          <h4 style={{ color: '#d69e2e', marginBottom: '15px' }}>Enlaces</h4>
          <a href="#inicio" style={{ color: '#cbd5e0', textDecoration: 'none', display: 'block' }}>Inicio</a>
          <a href="#servicios" style={{ color: '#cbd5e0', textDecoration: 'none', display: 'block' }}>Servicios</a>
        </div>
        <div>
          <h4 style={{ color: '#d69e2e', marginBottom: '15px' }}>Contacto</h4>
          <p style={{ fontSize: '0.9rem' }}>info@cater-kom.com</p>
          <p style={{ fontSize: '0.9rem' }}>Madrid, España</p>
        </div>
      </div>
      <div style={{ marginTop: '40px', fontSize: '0.8rem', opacity: 0.5 }}>
        © 2026 Cater-Kom Internacional SL.
      </div>
    </footer>
  );
}