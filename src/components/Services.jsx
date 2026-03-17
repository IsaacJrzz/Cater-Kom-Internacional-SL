export default function Services() {
  return (
    <section id="servicios" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      padding: '0 5%'
    }}>
      <h2 style={{ fontSize: '2.5rem', color: '#1a365d', marginBottom: '50px' }}>Nuestros Servicios</h2>
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={cardStyle}><h3>Exportación</h3><p>Gestión logística global.</p></div>
        <div style={cardStyle}><h3>Mercados</h3><p>Análisis de entrada a nuevos países.</p></div>
        <div style={cardStyle}><h3>Legal</h3><p>Asesoría en aduanas y aranceles.</p></div>
      </div>
    </section>
  );
}

const cardStyle = {
  padding: '40px',
  width: '300px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  borderRadius: '15px',
  textAlign: 'center'
};