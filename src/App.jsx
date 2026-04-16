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
    <div className="App">
      
      {/* El Navbar ahora desaparece en móvil */}
      <div className="hide-on-mobile">
        <Navbar />
      </div>

      <main>
        <Hero />
        
        <div className="hide-on-mobile">
          <Services />
          <About />
        </div>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;