import React from 'react';

// 1. IMPORTACIONES
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{ margin: 0, padding: 0, boxSizing: 'border-box' }}>
      
      <Navbar />

      <main>
        {/* El Hero se queda en ambos */}
        <Hero />

        {/* Estas secciones desaparecen en móvil */}
        <div className="hide-on-mobile">
          <Services />
          <About />
        </div>

        {/* El Contacto se queda en ambos */}
        <Contact />
      </main>

      <Footer />

    </div>
  );
}

export default App;