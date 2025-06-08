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
        <>

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
                ></textarea>   
                <br />
                <br />
                <button className="boton-estandar" onClick={fntEgresarHistorial}>Confirmo, que quiero egresarlo</button>
            </div>
        </>
    );
}


export default EgresarArchivo;
