export default function Hero() {
  return (
    <section id="inicio" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1a365d',
      color: 'white',
      textAlign: 'center',
      padding: '0 20px'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>CATER-KOM</h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '300', maxWidth: '700px', color: '#d69e2e' }}>
        Líderes en Consultoría de Comercio Internacional y Apertura de Mercados.
      </h2>
    </section>
  );
}