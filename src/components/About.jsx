import React from 'react';
import '../index.css';

export default function About() {
  return (
    <section id="nosotros" className="about-section">
      <div className="tech-grid-overlay"></div>
      
      <div className="about-container">
        <div className="about-content">
          <div className="badge-corporate">Excelencia en Suministros</div>
          <h2 className="about-title">
            Infraestructura Técnica <br/>
            <span>Global desde Coslada</span>
          </h2>
          
          <p className="about-description">
            En <strong>Cater-Kom Internacional S.L.</strong> transformamos la logística compleja en soluciones directas. Desde nuestro centro operativo en <strong>Coslada, Madrid</strong>, gestionamos el suministro crítico de componentes industriales, asegurando la operatividad de su empresa en <strong>Europa, África y América</strong> con precisión técnica y estándares de máxima calidad.
          </p>

          <div className="about-pillars">
            <div className="pillar">
              <div className="pillar-header">
                <span className="pillar-icon">01</span>
                <h4>Suministro Crítico</h4>
              </div>
              <p>Stock estratégico y respuesta inmediata para evitar paradas de producción.</p>
            </div>
            <div className="pillar">
              <div className="pillar-header">
                <span className="pillar-icon">02</span>
                <h4>Nodo Estratégico</h4>
              </div>
              <p>Operamos desde el corazón logístico de España para una distribución ágil y global.</p>
            </div>
          </div>
        </div>

        {/* Bloque Visual Optimizado */}
        <div className="about-visual-stats">
          <div className="stat-card gold-border">
            <span className="stat-value">3</span>
            <span className="stat-label">Continentes con Presencia</span>
          </div>
          <div className="stat-card blue-bg">
            <span className="stat-value">100%</span>
            <span className="stat-label">Garantía de Cumplimiento</span>
          </div>
          {/* Banda vertical de autoridad */}
          <div className="authority-band">
            <span>SUMINISTROS INDUSTRIALES CERTIFICADOS</span>
          </div>
        </div>
      </div>
    </section>
  );
}