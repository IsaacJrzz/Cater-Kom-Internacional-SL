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
      <Navbar />
      <main>
        <Hero />
        <Services />
          <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;