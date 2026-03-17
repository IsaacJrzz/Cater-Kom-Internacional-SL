import React, { useState } from 'react';

export default function Contact() {
  const [btnHover, setBtnHover] = useState(false);

  // --- ESTILOS ---
  const sectionStyle = {
    padding: '120px 5%',
    backgroundColor: '#0a192f',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    fontFamily: "'Inter', sans-serif",
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '100px', // Espacio generoso para que respire
    width: '100%',
    maxWidth: '1200px',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '40px',
  };

  const glassCardStyle = {
    flex: '1 1 500px',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderRadius: '30px',
    padding: '50px',
    paddingTop: '40px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
    boxSizing: 'border-box'
  };

  const inputStyle = {
    width: '100%',
    padding: '15px',
    marginBottom: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    color: '#fff',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box',
  };

  // --- EL RENDERIZADO (Dentro de la función) ---
  return (
    <section id="contacto" style={sectionStyle}>
      {/* Título */}
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h2 style={{ color: '#fff', fontSize: '3.2rem', margin: '0 0 20px 0', fontWeight: '800' }}>
          Hablemos de tu <span style={{ color: '#128FCC' }}>Proyecto</span>
        </h2>
        <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '1.3rem', maxWidth: '600px', margin: '0 auto' }}>
          La solución que tu empresa necesita está a un mensaje de distancia.
        </p>
      </div>

      <div style={containerStyle}>
        {/* INFO DE CONTACTO */}
        <div style={{ flex: '1 1 350px', color: '#fff', display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <h3 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>Contacto Directo</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontSize: '1.4rem', color: '#128FCC' }}>📍</span>
                <span style={{ fontSize: '1.1rem', opacity: 0.8 }}>Madrid, Spain</span>
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontSize: '1.4rem', color: '#128FCC' }}>📞</span>
                <span style={{ fontSize: '1.1rem', opacity: 0.8 }}>+34 900 000 000</span>
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontSize: '1.4rem', color: '#128FCC' }}>✉️</span>
                <span style={{ fontSize: '1.1rem', opacity: 0.8 }}>info@cater-kom.com</span>
             </div>
          </div>

          <div style={{ 
            marginTop: '40px', 
            padding: '30px', 
            backgroundColor: 'rgba(18, 143, 204, 0.07)', 
            borderRadius: '20px', 
            borderLeft: '5px solid #128FCC' 
          }}>
            <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '8px' }}>Compromiso Cater-Kom:</strong>
            <span style={{ opacity: 0.7 }}>Respuestas en menos de 2 horas.</span>
          </div>
        </div>

        {/* FORMULARIO */}
        <div style={glassCardStyle}>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Tu Nombre" style={inputStyle} />
            <input type="email" placeholder="Correo Electrónico" style={inputStyle} />
            <textarea 
              placeholder="¿Cómo podemos ayudarte?" 
              rows="5" 
              style={{ ...inputStyle, resize: 'none' }}
            ></textarea>
            <button 
              type="submit" 
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
              style={{
                width: '100%',
                padding: '18px',
                backgroundColor: btnHover ? '#ffffff' : '#128FCC',
                color: btnHover ? '#128FCC' : '#ffffff',
                border: 'none',
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: btnHover ? '0 10px 20px rgba(18, 143, 204, 0.3)' : 'none',
              }}
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}