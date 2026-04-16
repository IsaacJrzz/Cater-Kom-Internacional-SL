import React from 'react';
import '../index.css';

export default function Services() {
  const servicesData = [
    {
      title: "Exportación",
      desc: "Gestión logística global y optimización de cadenas de suministro internacionales.",
      // Icono: Red Global
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      title: "Mercados",
      desc: "Inteligencia comercial y análisis estratégico para la entrada a nuevos países.",
      // Icono: Gráfico de Barras / Análisis
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20V10M18 20V4M6 20v-4" />
        </svg>
      )
    },
    {
      title: "Legal",
      desc: "Asesoría especializada en normativas aduaneras, aranceles y derecho comercial.",
      // Icono: Escudo de Seguridad / Cumplimiento
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    }
  ];

  return (
    <section id="servicios" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <span className="services-badge">Expertise Global</span>
          <h2 className="services-title">Nuestros Servicios</h2>
          <div className="services-underline"></div>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className="service-card-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}