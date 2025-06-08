import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function InfoArchivo() {
    const location = useLocation();
    const archivo = location.state?.archivo;
    const [estado, setEstado] = useState('Cargando...');
    const [historial, setHistorial] = useState([]);

    useEffect(() => {
        if (!archivo) return;

        fetch(`http://localhost:8080/estado_archivo/${archivo.id_archivo}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud');
                }
                return response.json();
            })
            .then(resultado => {
                setEstado(resultado[0].titulo);
            })
            .catch(error => {
                console.error('Error al enviar:', error);
                setEstado('Error al obtener el estado');
            });

        fetch(`http://localhost:8080/historial/${archivo.id_archivo}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud');
                }
                return response.json();
            })
            .then(resultado => {
                setHistorial(resultado);
                console.log(resultado)
            })
            .catch(error => {
                console.error('Error al enviar:', error);
            });



    }, [archivo]);

    if (!archivo) {
        return <p>No se proporcionó información del archivo.</p>;
    }

    return (
        <div style={{ display: 'flex', padding: '20px', gap: '40px' }}>

            <div className='divespecial' style={{ flex: 1 }}>
                <h2>Información del Archivo</h2>
                <p><strong>ID_archivo:</strong> {archivo.id_archivo}</p>
                <p><strong>Título:</strong> {archivo.titulo}</p>
                <p><strong>Tipo:</strong> {archivo.tipoArchivo}</p>
                <p><strong>Estado:</strong> {estado}</p>
            </div>


            <div style={{ flex: 1 }}>
                <h2>Historial del archivo</h2>
                <p>Aquí se mostrará el historial del archivo {archivo.id_archivo}</p>
                <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Estado</th>
                            <th>Motivo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historial.map(historial => (
                            <tr key={historial.id_historial}>
                                <td>{historial.fecha}</td>
                                <td>{historial.id_estado}</td>
                                <td>{historial.motivo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default InfoArchivo;
