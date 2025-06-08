import { useNavigate } from 'react-router-dom';

function InicioPantalla() {
    const navigate = useNavigate();

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            minHeight: '100vh',
            overflow: 'hidden'
        }}>
            {}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url("/mp.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                filter: 'blur(4px)',
                zIndex: 0
            }} />

            {}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                zIndex: 1
            }} />

            {}
            <div style={{
                position: 'relative',
                zIndex: 2,
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
            }}>
                <div style={{
                    backgroundColor: 'rgba(208, 240, 253, 0.9)',
                    padding: '2rem',
                    borderRadius: '12px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    width: '90%',
                    maxWidth: '600px',
                    textAlign: 'center',
                }}>
                    <h1 style={{
                        fontSize: '2.5rem',
                        marginBottom: '2rem',
                        color: '#333'
                    }}>Bienvenido</h1>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        alignItems: 'center'
                    }}>
                        <button style={buttonStyle} onClick={() => navigate('/IngresarArchivo')} >Ingresar archivo</button>
                        <button style={buttonStyle} onClick={() => navigate('/GestinarArchivo')} >Gestionar archivos</button>
                        <button style={buttonStyle} onClick={() => navigate('/Reporte')}>Ver reporte de archivos</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const buttonStyle = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#0057D9',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '100%',
    maxWidth: '300px'
};

export default InicioPantalla;
