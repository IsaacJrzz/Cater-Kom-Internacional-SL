export default function Hero() {
  return (
    <section id="inicio" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'linear-gradient(rgba(18, 143, 204, 0.8), rgba(10, 25, 47, 1)), url("/img/fondo.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      textAlign: 'center',
      padding: '0 20px'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '20px', fontWeight: '800' }}>CATER-KOM</h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '500', maxWidth: '700px', color: '#d69e2e' }}>
        Líderes en Consultoría de Comercio Internacional y Apertura de Mercados.
      </h2>
    </section>
  );
}