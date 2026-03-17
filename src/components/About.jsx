export default function About() {
  return (
    <section id="nosotros" style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f4f7f9',
      padding: '0 10%'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#1a365d' }}>Sobre Nosotros</h2>
        <p style={{ fontSize: '1.2rem', marginTop: '30px', lineHeight: '1.8' }}>
          Con sede en España y presencia en 3 continentes, Cater-Kom Internacional SL ayuda a las empresas 
          a romper barreras geográficas mediante estrategias comerciales personalizadas.
        </p>
      </div>
    </section>
  );
}