import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EgresarArchivo() {
    const location = useLocation();
    const navigate = useNavigate();

    const fntEgresarHistorial = () => {
        const id_archivoState = location.state?.id_archivo;
        const ctlmotivo = document.getElementById('miMotivo');

        const id_archivo = id_archivoState;
        const motivo = ctlmotivo.value;


        const data = {
            id_archivo: id_archivo,
            id_estado: 3,
            motivo: motivo
        };
        if(motivo===''){
            console.log("no ingreso valores")
            return;
        }

        fetch('http://localhost:8080/historial', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud');
                }
                return response.json();
            })
            .then(resultado => {
                alert('prestado con exito');
                navigate(-1); 
            })
            .catch(error => {
                console.error('Error al enviar:', error);
            });
    };

    return (
         <div  style={{
                position: 'absolute',
                top: 100,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url("/mp2.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',                
            }}>

            <div className='divespecial'>
                <h1>Egresar Archivo</h1>

                <h3>Motivo*</h3>
                <textarea
                    id='miMotivo'
                    placeholder="Escribe aquí tu comentario..."
                    rows={4}
                    style={{
                        width: '100%',
                        maxWidth: '400px',
                        padding: '0.75rem 1rem',
                        fontSize: '1rem',
                        borderRadius: '8px',
                        border: '1px solid #ccc',
                        resize: 'vertical' 
                    }}
                    maxLength="200"
                ></textarea>   
                <h3>Fiscal (dpi)</h3>
                <input></input>
                <br />
                <br />
                <button className="boton-estandar" onClick={fntEgresarHistorial}>Confirmo, que quiero egresarlo</button>
            </div>
        </div>
    );
}


export default EgresarArchivo;
