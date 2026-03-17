import React from 'react';

// 1. IMPORTACIONES (Cuidando Mayúsculas/Minúsculas como en tu carpeta)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Si tienes estilos en index.css, descomenta la siguiente línea:
// import './index.css';

function App() {
  return (
    <div className="App" style={{ margin: 0, padding: 0, boxSizing: 'border-box' }}>
      
      {/* 2. LLAMADAS A LOS COMPONENTES */}
      
      {/* Este ya lo tenemos diseñado */}
      <Navbar />

      {/* Secciones principales */}
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>

      {/* Pie de página */}
      <Footer />

    </div>
  );
}

export default App;