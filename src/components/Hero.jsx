import React from 'react';
import '../index.css';

export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      {/* Luz central inspirada en Reflect */}
      <div className="reflect-glow-core"></div>
      
      <div className="hero-noise-overlay"></div>

      <div className="hero-main-container central-layout">
        
        {/* Badge superior (Novedad/Confianza) */}
        <div className="hero-badge">
          <span>Global Trade Leaders 2026</span>
        </div>

        <div className="hero-text-center">
          <h1 className="hero-title-reflect">CATER-KOM</h1>
          <p className="hero-subtitle-reflect">
            Conectamos su empresa con el mercado global a través de consultoría estratégica de alto nivel.
          </p>
          <div className="hero-cta-group">
            <a href="#contacto" className="btn-glow-primary">Empezar ahora</a>
          </div>
        </div>

        {/* El "Escaparate": Dashboard Visual que recibe la luz */}
        <div className="hero-showcase-container">
          <div className="showcase-window">
            <div className="window-header">
              <div className="dots"><span></span><span></span><span></span></div>
              <div className="window-title">Cater-Kom Global Analytics</div>
            </div>
            <div className="window-content">
              {/* Aquí simulamos datos de empresa */}
              <div className="fake-data-line short"></div>
              <div className="fake-data-line long"></div>
              <div className="fake-grid">
                <div className="grid-item"></div>
                <div className="grid-item"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}