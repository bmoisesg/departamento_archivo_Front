function Panel() {

  const styles = {
    navbar: {
      background: 'linear-gradient(to right, #4facfe, #00f2fe)',
      padding: '20px',

      marginBottom: '20px',
      color: 'white',
    },
    title: {
      margin: 0,
      fontSize: '24px',
    },
    buttonContainer: {
      marginTop: '15px',
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '20px',
      border: 'none',
      background: 'linear-gradient(to right, #43e97b, #38f9d7)',
      color: 'white',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
  };

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>Departamento de Archivo</h1>
    </nav>);
}

export default Panel; 