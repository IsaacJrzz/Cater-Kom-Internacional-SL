export default function Contact() {
  return (
    <section id="contacto" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1a365d',
      color: 'white'
    }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>¿Hablamos?</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>Cuéntanos tu proyecto internacional.</p>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', maxWidth: '400px' }}>
        <input type="text" placeholder="Tu Nombre" style={inputStyle} />
        <input type="email" placeholder="Email de contacto" style={inputStyle} />
        <textarea placeholder="Mensaje" style={{ ...inputStyle, height: '100px' }}></textarea>
        <button style={{ padding: '15px', backgroundColor: '#d69e2e', border: 'none', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
          ENVIAR SOLICITUD
        </button>
      </form>
    </section>
  );
}

const inputStyle = { padding: '12px', borderRadius: '5px', border: 'none' };