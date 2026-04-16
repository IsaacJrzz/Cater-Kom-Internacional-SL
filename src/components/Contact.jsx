import React from 'react';
import '../index.css';

export default function Contact() {
  return (
    <section id="contacto" className="contact-section">
      {/* HEADER DE LA SECCIÓN */}
      <div className="contact-header">
        <h2 className="contact-title">
          Hablemos de tu <span>Proyecto</span>
        </h2>
        <p className="contact-subtitle">
          La solución que tu empresa necesita está a un mensaje de distancia.
        </p>
      </div>

      <div className="contact-container">
        {/* LADO IZQUIERDO: INFO DE CONTACTO */}
        <div className="contact-info">
          <h3 className="info-title">Contacto Directo</h3>
          
          <div className="info-list">
             <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <span>Madrid, Spain</span>
             </div>
             <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <span>+34 900 000 000</span>
             </div>
             <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <span>info@cater-kom.com</span>
             </div>
          </div>

          <div className="commitment-card">
            <strong>Compromiso Cater-Kom:</strong>
            <span>Respuestas en menos de 2 horas.</span>
          </div>
        </div>

        {/* LADO DERECHO: FORMULARIO GLASSMORFICO */}
        <div className="contact-form-card">
          <form onSubmit={(e) => e.preventDefault()} className="contact-form">
            <div className="input-group">
              <input type="text" placeholder="Tu Nombre" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Correo Electrónico" required />
            </div>
            <div className="input-group">
              <textarea placeholder="¿Cómo podemos ayudarte?" rows="5" required></textarea>
            </div>
            <button type="submit" className="contact-submit-btn">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}